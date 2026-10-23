// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages settings. The deploy workflow fills these in automatically:
//   SITE_URL  -> https://<user>.github.io
//   BASE_PATH -> "/" for a <user>.github.io repo, or "/<repo-name>" otherwise
const site = process.env.SITE_URL || 'https://bhuvanesh-sudo.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
});
