/**
 * Fuente única de rutas indexables del sitio.
 *
 * Extrae los ids de servicios y slugs de proyectos directamente de los data files
 * (src/data/services.ts y src/data/projects.ts) para que prerender y sitemap
 * nunca se desincronicen del contenido real.
 */
import fs from 'node:fs';
import path from 'node:path';

const SRC = path.resolve('src', 'data');

function extract(file, regex) {
  const content = fs.readFileSync(path.join(SRC, file), 'utf-8');
  return [...content.matchAll(regex)].map((m) => m[1]);
}

export function getServiceIds() {
  // Solo los ids dentro de servicesData (los de categoryConfigs quedan antes del marcador)
  const content = fs.readFileSync(path.join(SRC, 'services.ts'), 'utf-8');
  const fromServices = content.slice(content.indexOf('servicesData'));
  return [...fromServices.matchAll(/^\s{4}id: '([^']+)'/gm)].map((m) => m[1]);
}

export function getProjectSlugs() {
  return extract('projects.ts', /slug: '([^']+)'/g);
}

export function getRoutes() {
  return [
    '/',
    ...getServiceIds().map((id) => `/servicios/${id}`),
    ...getProjectSlugs().map((slug) => `/proyectos/${slug}`)
  ];
}
