// Everything personal lives here, so it can be edited in one place.
export const site = {
  name: 'Bhuvanesh Srikanth',
  shortName: 'Bhuvanesh',
  location: 'Chennai, India',
  email: 'bhuvan1107@gmail.com',
  github: 'https://github.com/bhuvanesh-sudo',
  linkedin: 'https://linkedin.com/in/bhuvanesh-s-0vnu',
  resume: 'resume.pdf',
  photo: 'pp.jpg',
  description:
    'Bhuvanesh Srikanth builds software that is meticulous beneath the surface and frictionless on top: web apps, AI tools and smart contracts.',
};

/** Prefix a site-relative path with the configured base (needed for GitHub Pages project sites). */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}
