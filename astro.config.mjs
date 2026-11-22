// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from the custom domain bv.is-a.dev, at the root.
// These are fixed on purpose: the deploy workflow's SITE_URL and BASE_PATH
// are for github.io addresses and would break links on the custom domain.
export default defineConfig({
  site: 'https://bv.is-a.dev',
  base: '/',
  trailingSlash: 'ignore',
});
