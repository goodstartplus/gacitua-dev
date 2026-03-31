import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    locale: z.enum(['en', 'pt']),
    type: z.enum(['app', 'website', 'platform', 'automation', 'internal-tool', 'experiment']),
    status: z.enum(['live', 'beta', 'archived', 'private', 'in-progress']),
    summary: z.string(),
    shortDescription: z.string(),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    coverImage: z.string(),
    gallery: z.array(z.string()).default([]),
    externalUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().int().nonnegative().default(0),
    year: z.number().int(),
    clientOrPersonal: z.enum(['client', 'personal', 'internal', 'mixed']),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
};