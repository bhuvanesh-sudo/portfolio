// Everything personal lives here, so it can be edited in one place.
import { mode, worstSite } from './fixtures';

const demoSite = {
  name: 'Bhuvanesh',
  shortName: 'Bhuvanesh',
  location: 'Chennai, India',
  email: 'bhuvan1107@gmail.com',
  github: 'https://github.com/bhuvanesh-sudo',
  linkedin: 'https://linkedin.com/in/bhuvanesh-s-0vnu',
  resume: 'resume.pdf',
  photo: 'portrait.webp',
  description:
    'Bhuvanesh, a developer in Chennai building generative AI tools and full-stack web apps.',
};

// Dev-only: PUBLIC_DATA=worst swaps in long identity strings (src/data/fixtures.ts).
export const site = mode === 'worst' ? { ...demoSite, ...worstSite } : demoSite;

/** Prefix a site-relative path with the configured base (needed for GitHub Pages project sites). */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}
