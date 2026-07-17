import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Guides — the core product. Frontmatter drives the by-system / by-task /
 * by-year navigation, the parts block (affiliate links), and the sources block.
 */
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(), // one-paragraph standfirst under the title
    applies_to: z.string(), // e.g. "356A (1956–59) · B/C differ"
    system: z.enum([
      'Body & Chassis',
      'Engine · Type 616',
      'Transmission',
      'Brakes & Suspension',
      'Electrical · 6V',
      'Interior',
      'Exterior Trim & Glass',
      'Paint & Finishes',
      'Wheels & Tires',
    ]),
    task_type: z.enum(['repair', 'rebuild', 'replace', 'assess', 'reference', 'decision']),
    difficulty: z.enum(['Easy', 'Moderate', 'Hard', 'Specialist']),
    time: z.string().optional(), // e.g. "1–2 weekends"
    status: z.enum(['verified', 'research', 'planned']),
    // 'verified' = performed and photographed on VIN 108689
    // 'research' = sources consolidated, not yet done on the shop car
    verified_on: z.string().optional(), // e.g. "VIN 108689, spring 2026"
    updated: z.coerce.date(),
    hero_photo: z.string().optional(),
    parts: z
      .array(
        z.object({
          name: z.string(),
          pn: z.string().optional(),
          note: z.string().optional(),
          supplier: z.string(), // display name: Stoddard, NLA, Sierra Madre, Pelican…
          url: z.string().optional(), // affiliate URL when accounts are live
        })
      )
      .default([]),
    sources: z
      .array(
        z.object({
          type: z.enum(['Book', 'Forum', 'Factory', 'Supplier', 'Shop car']),
          ref: z.string(),
          url: z.string().optional(),
        })
      )
      .default([]),
  }),
});

/** Build log — dated entries from the restoration of VIN 108689. */
const log = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    chapter: z.string(), // Metal, Doors & Seams, Paint, Electrical…
    tag: z.enum(['Done', 'Active', 'Lesson', 'Deciding']),
    summary: z.string(),
  }),
});

export const collections = { guides, log };
