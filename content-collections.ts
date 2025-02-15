import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const posts = defineCollection({
  name: "projects",
  directory: "projects",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    stack: z.string().array(),
    imageURL: z.string(),
    featured: z.boolean().optional().default(false),
    // Transform string to Date object
    date: z.coerce.date(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

const blogs = defineCollection({
  name: "blogs",
  directory: "blogs",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    imageURL: z.string(),
    featured: z.boolean().optional().default(false),
    tags: z
      .object({
        name: z.string(),
        color: z
          .enum(["yellow", "red", "green", "purple", "blue"])
          .default("yellow"),
      })
      .array(),
    // Transform string to Date object
    date: z.coerce.date(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts, blogs],
});
