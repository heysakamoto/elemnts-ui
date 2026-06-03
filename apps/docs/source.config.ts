import { metaSchema } from "fumadocs-core/source/schema";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";

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
	},
	meta: {
		schema: metaSchema.extend({}),
	},
});
