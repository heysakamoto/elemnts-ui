import {
	defineConfig,
	defineDocs,
	frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export default defineConfig({});

export const docs = defineDocs({
	dir: "content/docs",
	docs: {
		postprocess: {
			includeProcessedMarkdown: true,
		},
		schema: frontmatterSchema.extend({
			status: z.enum(["updated", "new"]).optional(),
			links: z
				.object({
					ark: z.string().optional(),
					recipe: z.string().optional(),
					source: z.string().optional(),
					storybook: z.string().optional(),
				})
				.optional(),
		}),
	},
});
