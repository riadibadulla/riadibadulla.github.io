import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CRITERIA } from './criteria';

const criterionScore = z.object({
  score: z.union([z.number().min(0).max(10), z.literal('not assessable')]),
  justification: z.string().min(1),
});

// One key per criterion, so a missing or misspelt criterion fails the build.
const scores = z.object(
  Object.fromEntries(CRITERIA.map((c) => [c.key, criterionScore])) as Record<
    (typeof CRITERIA)[number]['key'],
    typeof criterionScore
  >,
);

const notes = defineCollection({
  // Files starting with "_" (e.g. _example-note.md) are validated but never published: see src/notes.ts.
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    reviewed_artefacts: z.array(z.string()).min(1),
    weighting: z.string(),
    scores,
    overall_score: z.number().min(0).max(10),
    recommended_engagement: z.string(),
    pdf: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/publications' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      short_title: z.string().optional(), // shown on the thumbnail when there is no figure
      authors: z.array(z.string()).min(1),
      venue: z.string(),
      date: z.coerce.date(),
      type: z.enum(['journal', 'conference', 'workshop']),
      summary: z.string(),
      doi: z.string(),
      url: z.url().optional(), // published version, if different from the DOI link
      open_access: z.url().optional(), // free author or repository version
      open_access_label: z.string().default('Free version'),
      pdf: z.string().optional(), // file under public/files/publications/
      bibtex: z.string().optional(),
      code: z.url().optional(),
      body_heading: z.string().default('Abstract'), // heading above the Markdown body
      figure: image().optional(),
      figure_alt: z.string().optional(),
      figure_caption: z.string().optional(),
    }),
});

export const collections = { notes, publications };
