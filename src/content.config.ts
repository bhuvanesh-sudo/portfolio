import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Case studies: one Markdown file per featured project. `slug` must match src/data/projects.ts.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    lede: z.string(),
    role: z.string(),
    order: z.number().default(0),
  }),
});

// Writing: drop a Markdown file in src/content/writing/. Set `draft: false` to publish it.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { work, writing };
