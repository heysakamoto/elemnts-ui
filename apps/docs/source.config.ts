import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import z from "zod";

export default defineConfig({
	mdxOptions: {},
});

export const docs = defineDocs({
	dir: "content/docs",
	docs: {
		async: true,
		postprocess: {
			includeProcessedMarkdown: true,
		},
		schema: pageSchema.extend({
			subtitle: z.string().optional(),
			index: z.boolean().optional().default(false),
		}),
	},
	meta: {
		schema: metaSchema.extend({}),
	},
});
