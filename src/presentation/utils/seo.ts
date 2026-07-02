import { useEffect } from 'react';

export const SITE_URL = 'https://jose16-21.github.io';

export interface PageSeo {
  /** Título del documento (title + og:title + twitter:title). */
  title: string;
  /** Meta description + og:description + twitter:description. */
  description: string;
  /** Ruta canónica, p. ej. "/servicios/ai-mcp-integration". */
  path: string;
  /** Imagen absoluta o relativa para og:image. */
  image?: string;
  /** JSON-LD específico de la ruta; se inyecta como script y se limpia al desmontar. */
  jsonLd?: object;
}

const JSONLD_ATTR = 'data-route-jsonld';

function setMeta(selector: string, attr: 'content', value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute(attr, value);
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

/**
 * SEO por ruta: title, description, canonical, Open Graph/Twitter y JSON-LD.
 * Pensado para que el prerender post-build capture el <head> correcto de cada URL.
 */
export function usePageSeo({ title, description, path, image, jsonLd }: PageSeo) {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '' : path}`;
    const img = image
      ? image.startsWith('http') ? image : `${SITE_URL}${image}`
      : `${SITE_URL}/images/consulting.png`;

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setCanonical(url);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:image"]', 'content', img);
    setMeta('meta[property="twitter:title"]', 'content', title);
    setMeta('meta[property="twitter:description"]', 'content', description);
    setMeta('meta[property="twitter:url"]', 'content', url);
    setMeta('meta[property="twitter:image"]', 'content', img);

    // JSON-LD de la ruta (se reemplaza el anterior si existe)
    document.head.querySelectorAll(`script[${JSONLD_ATTR}]`).forEach((s) => s.remove());
    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute(JSONLD_ATTR, 'true');
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.head.querySelectorAll(`script[${JSONLD_ATTR}]`).forEach((s) => s.remove());
    };
    // jsonLd se serializa para evitar re-ejecuciones por identidad de objeto
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, JSON.stringify(jsonLd ?? null)]);
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '/' : item.path}`
    }))
  };
}
