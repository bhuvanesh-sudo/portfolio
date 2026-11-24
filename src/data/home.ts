// Copy for the home page. Facts come from the resume and the case studies; nothing else is claimed.
import { site, url } from './site';

export const hero = {
  notice: 'TypeFaze: 5 letters in, 52 out',
  h1: 'Generative AI apps, built end to end',
  lead: 'I build LLM tools and full-stack web apps for teams, from first prototype to polished product.',
  primary: { label: 'Email me', href: `mailto:${site.email}` },
  secondary: { label: 'See the work', href: url('work') },
};

export const work = {
  title: 'Selected work.',
  lead: 'Two projects, written up in full.',
};

export const servicesHead = { title: 'Services.', lead: 'Three kinds of work, each with a project behind it.' };
export const toolsHead = { title: 'More projects.', lead: 'Research, embedded and AI experiments.' };
export const processHead = { title: 'How a project runs.', lead: 'Four steps, with something real to look at early.' };

export const services: { title: string; body: string; icons: { id: string; alt: string }[] }[] = [
  {
    title: 'AI tools',
    body: 'Retrieval over your documents, LLM assistants and custom models. Legal RAG answers contract questions and cites the exact clause.',
    icons: [{ id: 'python', alt: 'Python' }, { id: 'pytorch', alt: 'PyTorch' }],
  },
  {
    title: 'Full-stack web apps',
    body: 'Next.js, Postgres and Supabase, shipped to production. GrowingPlate scores a child’s day against 30+ nutrient targets.',
    icons: [{ id: 'nextjs', alt: 'Next.js' }, { id: 'supabase', alt: 'Supabase' }, { id: 'postgres', alt: 'PostgreSQL' }],
  },
  {
    title: 'On-device ML apps',
    body: 'Models that run on the visitor’s device, so nothing is sent to a server. TypeFaze runs a 13.5M-parameter model in WebGPU.',
    icons: [{ id: 'react', alt: 'React' }, { id: 'onnx', alt: 'ONNX' }],
  },
];

export const process: { step: string; body: string; icons: { id: string; alt: string }[] }[] = [
  { step: 'Scope', body: 'We agree what the first version must do, and what it can leave out.', icons: [{ id: 'ui-list-checks', alt: 'Checklist' }] },
  { step: 'Prototype', body: 'A working version early, so you react to something real.', icons: [{ id: 'python', alt: 'Python' }, { id: 'react', alt: 'React' }] },
  { step: 'Build', body: 'Readable production code, reviewed and shipped to a live address.', icons: [{ id: 'nextjs', alt: 'Next.js' }, { id: 'supabase', alt: 'Supabase' }, { id: 'docker', alt: 'Docker' }] },
  { step: 'Hand over', body: 'Notes on how it runs, so your team can keep going without me.', icons: [{ id: 'github', alt: 'GitHub' }, { id: 'vercel', alt: 'Vercel' }] },
];

export const statement = {
  before: 'I take ideas from an early prototype to a',
  strong: 'reliable',
  after: ', polished product, and hand over code and notes your team can keep building on.',
};

export const about = {
  title: 'About',
  body: 'I’m a final-year computer science student at Amrita in Chennai. I build generative AI applications across text and images, from retrieval over legal PDFs to a font model that runs in your browser.',
};

export const featuredTitles: Record<string, string> = {
  growingplate: 'GrowingPlate web app',
  typefaze: 'TypeFaze font tool',
};

// Tools the projects really use (resume and case studies); each has a file in public/assets/icons.
export const tools: { id: string; alt: string }[] = [
  { id: 'python', alt: 'Python' },
  { id: 'pytorch', alt: 'PyTorch' },
  { id: 'react', alt: 'React' },
  { id: 'nextjs', alt: 'Next.js' },
  { id: 'typescript', alt: 'TypeScript' },
  { id: 'supabase', alt: 'Supabase' },
  { id: 'postgres', alt: 'PostgreSQL' },
  { id: 'fastapi', alt: 'FastAPI' },
  { id: 'docker', alt: 'Docker' },
];
