// DEV-ONLY test data for the break-ui pass. Nothing here ships: it is read only when the dev server runs
// with PUBLIC_DATA=worst | one | empty (`PUBLIC_DATA=worst npx astro dev`). In a build, import.meta.env.DEV is
// false, so every export below is unused and tree-shaken. Keep this file as the regression fixture.
import type { Project } from './projects';

export const mode: 'worst' | 'one' | 'empty' | undefined = import.meta.env.DEV
  ? (import.meta.env.PUBLIC_DATA as 'worst' | 'one' | 'empty' | undefined)
  : undefined;

// Realistic worst cases: long but plausible project names, a two-letter name, an emoji, a stack of 14 real tools,
// a link label that runs long, a row with no link and no repo, and a featured project with no case-study cover.
export const worstProjects: Project[] = [
  {
    slug: 'growingplate',
    name: 'Paediatric Nutrition Monitoring and Dietary Recommendation Platform',
    summary:
      'A nutrition tracker for parents. Log what your child ate across breakfast, lunch, snacks and dinner, and see how the whole day measures up against more than thirty nutrient targets for their age, sex and activity level, with severity-tagged alerts and weekly trends.',
    kind: 'Web app and recommendation engine',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Row Level Security', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Recharts', 'Zod', 'Supabase', 'Vercel', 'GitHub Actions', 'Playwright', 'Storybook'],
    status: 'Live',
    link: { label: 'Open the live application in a new window', href: 'https://example.com' },
    repo: 'https://example.com/repo',
    featured: true,
  },
  {
    slug: 'multilingual-contract-intelligence',
    name: 'AI',
    summary: 'WIP',
    kind: 'Research benchmark, teaching tool and open dataset',
    stack: ['PyTorch'],
    status: 'In progress',
    featured: true,
  },
  {
    slug: 'a',
    name: '🚀 Launchpad',
    summary: 'Generates clash-free university timetables with a constraint-solving engine, plus role-based dashboards for admins, heads of department and faculty across several campuses.',
    kind: 'Web app',
    stack: ['Django', 'PostgreSQL', 'React', 'pytest'],
    status: 'Shipped',
    team: true,
  },
  {
    slug: 'b',
    name: 'Trust-Aware Software-Defined Network Load Balancer Benchmark Suite',
    summary: 'A reproducible benchmark for trust-aware network load balancers, built around servers that behave well and then turn malicious.',
    kind: 'Research benchmark',
    stack: ['Python', 'NumPy', 'SciPy', 'pytest'],
    status: 'Shipped',
    repo: 'https://example.com/repo',
    team: true,
  },
  {
    slug: 'c',
    name: 'Edge-to-Cloud Retrofit Braking Assistance',
    summary: 'An edge-to-cloud system that retrofits electric vehicles with sensor-fusion braking assistance.',
    kind: 'Embedded / IoT',
    stack: ['C++', 'ESP32', 'Python'],
    status: 'Shipped',
    repo: 'https://example.com/repo',
  },
];

export const oneProject: Project[] = [worstProjects[0]];

// A long but real naming pattern, and a long corporate-style email.
export const worstSite = {
  name: 'Bhuvaneshwaran Subramanian-Krishnamurthy',
  shortName: 'Bhuvaneshwaran',
  email: 'bhuvaneshwaran.subramanian-krishnamurthy@northwind-industries-holdings.example.com',
  location: 'Thiruvananthapuram, Kerala, India',
};
