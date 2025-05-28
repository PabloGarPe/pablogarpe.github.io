import { defineCollection, z } from "astro:content";

const aboutmeCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    date: z.string(),
    img: z.string()
  }),
});

const techstackCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    color: z.string().optional(),
  }),
});

export const collections = {
  aboutme: aboutmeCollection,
  techstack: techstackCollection,
};
