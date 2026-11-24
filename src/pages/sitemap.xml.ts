import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Every public page, with the same trailing-slash form the pages use as their canonical URL.
export const GET: APIRoute = async ({ site }) => {
  const base = site!.href.replace(/\/$/, '');
  const work = await getCollection('work');
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  const paths = [
    '/',
    '/work/',
    '/about/',
    '/writing/',
    ...work.map((w) => `/work/${w.data.slug}/`),
    ...posts.map((p) => `/writing/${p.id}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
    .map((p) => `  <url><loc>${base}${p}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
