import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const posts = defineCollection({
  name: "projects",
  directory: "projects",
  include: "*.mdx",
  schema: (z) => ({
    name: z.string(),
    overview: z.string(),
    stack: z.string().array(),
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
  collections: [posts],
});
