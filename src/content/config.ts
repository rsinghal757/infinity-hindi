import { defineCollection, z } from "astro:content";

const chaptersCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    chapter_number: z.number(),
    published: z.boolean().default(true),
  }),
});

export const collections = {
  chapters: chaptersCollection,
};
