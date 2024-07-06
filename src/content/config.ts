import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    published: z.boolean().optional().default(true),
  }),
});

export const collections = {
  blog: blogCollection,
};
