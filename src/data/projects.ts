// The project index. Featured projects also have a case study in src/content/work/.
// To add a project: copy an entry, fill it in. Order here is the order on the site.

export type Status = 'Live' | 'Shipped' | 'In progress';

export interface Project {
  slug: string;
  name: string;
  summary: string;
  kind: string;
  stack: string[];
  status: Status;
  link?: { label: string; href: string };
  repo?: string;
  featured?: boolean;
  team?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'growingplate',
    name: 'GrowingPlate',
    summary:
      'A nutrition tracker for parents. Log what your child ate and see how the day measures up against 30+ nutrient targets for their age.',
    kind: 'Web app',
    stack: ['Next.js', 'Supabase', 'PostgreSQL', 'TypeScript', 'Recharts'],
    status: 'Live',
    link: { label: 'Open the app', href: 'https://growing-plate.vercel.app' },
    featured: true,
  },
  {
    slug: 'legal-rag',
    name: 'Legal RAG',
    summary:
      'Contract intelligence. Upload a legal PDF, ask questions in plain English, and get answers that cite the exact clause.',
    kind: 'AI tool',
    stack: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'React'],
    status: 'Shipped',
    repo: 'https://github.com/bhuvanesh-sudo/leg-rag',
    featured: true,
  },
  {
    slug: 'turncoat-sdn',
    name: 'turncoat-sdn',
    summary:
      'A reproducible benchmark for trust-aware network load balancers, built around servers that behave well and then turn malicious.',
    kind: 'Research benchmark',
    stack: ['Python', 'NumPy', 'SciPy', 'pytest'],
    status: 'In progress',
    repo: 'https://github.com/bhuvanesh-sudo/turncoat-sdn',
    team: true,
  },
  {
    slug: 'timetable-scheduler',
    name: 'Timetable Scheduler',
    summary:
      'Generates clash-free university timetables with a constraint-solving engine, plus role-based dashboards for admins, HODs and faculty.',
    kind: 'Web app',
    stack: ['Django', 'PostgreSQL', 'React', 'pytest'],
    status: 'Shipped',
    repo: 'https://github.com/bhuvanesh-sudo/timetable-scheduler',
    team: true,
  },
  {
    slug: 'keepalive',
    name: 'KeepAlive',
    summary:
      'A dead man’s switch on Ethereum. Check in to keep your funds locked; miss the deadline and your beneficiary can claim them.',
    kind: 'Smart contract',
    stack: ['Solidity', 'Hardhat', 'TypeScript', 'Ethers.js'],
    status: 'Shipped',
    repo: 'https://github.com/bhuvanesh-sudo/deadman-switch',
  },
  {
    slug: 'traced',
    name: 'Traced',
    summary:
      'A web RPG for children with autism and dyspraxia that turns fine-motor tracing exercises into a game.',
    kind: 'Game',
    stack: ['React', 'Node.js', 'MongoDB', 'Canvas'],
    status: 'Shipped',
    repo: 'https://github.com/bhuvanesh-sudo/traced',
  },
  {
    slug: 'dreamer-macrocosm',
    name: 'Dreamer Macrocosm',
    summary:
      'Turns written dream journals into knowledge graphs of people, places and recurring symbols.',
    kind: 'NLP experiment',
    stack: ['Python', 'spaCy', 'Neo4j', 'FastAPI', 'React'],
    status: 'In progress',
  },
  {
    slug: 'smart-braking',
    name: 'Smart Braking System',
    summary:
      'An edge-to-cloud system that retrofits electric vehicles with sensor-fusion braking assistance.',
    kind: 'Embedded / IoT',
    stack: ['C++', 'ESP32', 'Python'],
    status: 'Shipped',
    repo: 'https://github.com/23CSE362-edge-computing-2025-26-odd/capstone-project-20_edgelords',
    team: true,
  },
  {
    slug: 'harvest-hash',
    name: 'Harvest Hash',
    summary:
      'A decentralised ledger for agricultural trades, so farmers and buyers share one tamper-proof record.',
    kind: 'dApp',
    stack: ['Solidity', 'Web3.js', 'React', 'Node.js'],
    status: 'Shipped',
    repo: 'https://github.com/bhuvanesh-sudo/harvest-hash',
  },
  {
    slug: 'ethical-rantbot',
    name: 'Ethical Rantbot',
    summary:
      'A deliberately judgemental chatbot that scores the morality of whatever you tell it, live.',
    kind: 'AI toy',
    stack: ['React', 'FastAPI', 'Groq', 'Ollama'],
    status: 'Shipped',
    repo: 'https://github.com/bhuvanesh-sudo/ethical-rantbot',
  },
];

export const featured = projects.filter((p) => p.featured);
export const others = projects.filter((p) => !p.featured);
