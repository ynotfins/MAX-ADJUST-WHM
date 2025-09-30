// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
var posts = defineCollection({
  name: "posts",
  directory: "src/contents",
  include: "**/*.mdx",
  schema: (z) => ({
    slug: z.string(),
    thumbnail: z.string(),
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    service: z.string()
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      files: (appender) => {
        appender.content(
          "~/components/promotional-callout",
          "export default function PromotionalCallout() { return null; }"
        );
      }
    });
    return {
      ...document,
      mdx
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
