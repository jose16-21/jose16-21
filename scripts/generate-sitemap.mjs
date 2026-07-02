/**
 * Genera dist/sitemap.xml (y actualiza public/sitemap.xml) con TODAS las rutas
 * indexables, derivadas de los data files vía site-routes.mjs.
 * Se ejecuta en el postbuild, antes del prerender.
 */
import fs from 'node:fs';
import path from 'node:path';
import { getRoutes } from './site-routes.mjs';

const SITE_URL = 'https://jose16-21.github.io';
const today = new Date().toISOString().slice(0, 10);

function priorityFor(route) {
  if (route === '/') return '1.0';
  if (route.startsWith('/servicios/')) return '0.8';
  if (route.startsWith('/proyectos/')) return '0.7';
  return '0.5';
}

const urls = getRoutes()
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priorityFor(route)}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

for (const dir of ['dist', 'public']) {
  const out = path.resolve(dir, 'sitemap.xml');
  if (fs.existsSync(path.dirname(out))) {
    fs.writeFileSync(out, xml, 'utf-8');
    console.log(`[sitemap] escrito ${out} (${getRoutes().length} URLs)`);
  }
}
