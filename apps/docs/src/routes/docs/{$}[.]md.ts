import { createFileRoute, notFound } from "@tanstack/react-router";
import { getLLMText } from "@/lib/get-llm-text";
import { source } from "@/lib/source";
import { markdownPathToSlugs } from "@/utils/markdown";

export const Route = createFileRoute("/docs/{$}.md")({
	server: {
		handlers: {
			GET: async ({ params }) => {
				const slugs = markdownPathToSlugs(params._splat?.split("/") ?? []);
				const page = source.getPage(slugs);
				if (!page) throw notFound();

				return new Response(await getLLMText(page), {
					headers: {
						"Content-Type": "text/markdown",
					},
				});
			},
		},
	},
});
