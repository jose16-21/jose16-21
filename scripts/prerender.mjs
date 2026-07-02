/**
 * Prerender estático post-build.
 *
 * Sirve el directorio dist/ con `vite preview`, lo visita con un Chrome headless
 * (puppeteer-core) y guarda el HTML ya renderizado de cada ruta en dist/<ruta>/index.html.
 *
 * Objetivo: que buscadores y agentes IA reciban el contenido en el HTML servido,
 * en lugar de un <div id="root"> vacío (la app es 100% client-side).
 *
 * Tolerante a fallos: si Chrome no está disponible o algo falla, NO rompe el build.
 * En ese caso el deploy sigue sirviendo la versión client-side actual (nunca queda peor).
 *
 * Chrome: usa CHROME_PATH si está definido; si no, busca el canal 'chrome' instalado
 * (los runners de GitHub Actions ubuntu traen google-chrome preinstalado).
 */
import { preview } from 'vite';
import puppeteer from 'puppeteer-core';
import path from 'node:path';
import fs from 'node:fs/promises';
import { getRoutes } from './site-routes.mjs';

// Todas las rutas indexables (home + servicios + proyectos), derivadas de los data files.
const ROUTES = getRoutes();
const PORT = Number(process.env.PRERENDER_PORT || 4179);
const DIST = path.resolve('dist');
// Selector que confirma que el contenido dinámico ya se renderizó.
const CONTENT_READY_SELECTOR = '#servicios, #portafolio, main';

function resolveLaunchOptions() {
  const opts = {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  };
  if (process.env.CHROME_PATH) {
    opts.executablePath = process.env.CHROME_PATH;
  } else {
    // Localiza un Chrome estable instalado en el sistema.
    opts.channel = 'chrome';
  }
  return opts;
}

async function run() {
  const server = await preview({ preview: { port: PORT, strictPort: true } });

  let browser;
  try {
    browser = await puppeteer.launch(resolveLaunchOptions());
  } catch (err) {
    console.warn('[prerender] No se pudo iniciar Chrome, se omite el prerender:', err.message);
    await closeServer(server);
    return; // build sigue adelante con la versión client-side
  }

  const captured = [];
  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${route}`;
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 });
      try {
        await page.waitForSelector(CONTENT_READY_SELECTOR, { timeout: 15000 });
      } catch {
        console.warn(`[prerender] Selector de contenido no encontrado en ${route}, se captura de todos modos.`);
      }
      // Pequeña espera para que terminen renders diferidos (carga async de datos).
      await new Promise((r) => setTimeout(r, 800));
      const html = await page.content();
      captured.push({ route, html });
      await page.close();
      console.log(`[prerender] capturado ${route} (${html.length} bytes)`);
    }
  } finally {
    await browser.close();
    await closeServer(server);
  }

  // Escribir al final, para no alterar dist/ mientras se sirve.
  for (const { route, html } of captured) {
    const outDir = route === '/' ? DIST : path.join(DIST, route.replace(/^\//, ''));
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, 'index.html'), html, 'utf-8');
    console.log(`[prerender] escrito ${path.relative(DIST, path.join(outDir, 'index.html')) || 'index.html'}`);
  }
}

async function closeServer(server) {
  try {
    await new Promise((resolve, reject) => {
      server.httpServer.close((e) => (e ? reject(e) : resolve()));
    });
  } catch {
    /* ignore */
  }
}

run()
  .then(() => {
    console.log('[prerender] completado');
    process.exit(0);
  })
  .catch((err) => {
    // No fallar el build por un error de prerender.
    console.warn('[prerender] error (no bloqueante):', err && err.message ? err.message : err);
    process.exit(0);
  });
