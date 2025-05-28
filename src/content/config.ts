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
    level: z.enum(["Beginner", "Intermediate", "Advanced"]).optional(),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url()
  })
})

export const collections = {
  aboutme: aboutmeCollection,
  techstack: techstackCollection,
  projects: projectsCollection
};
