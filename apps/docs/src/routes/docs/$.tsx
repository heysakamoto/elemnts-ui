import { createFileRoute, notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import browserCollections from "collections/browser";
import { useFumadocsLoader } from "fumadocs-core/source/client";
import { Suspense } from "react";

import { getMDXComponents } from "@/components/mdx";
import { DocsLayout } from "@/layouts/docs";
import { source } from "@/lib/source";

export const Route = createFileRoute("/docs/$")({
	component: Page,
	loader: async ({ params }) => {
		const slugs = params._splat?.split("/") ?? [];
		const data = await serverLoader({ data: slugs });
		await clientLoader.preload(data.path);
		return data;
	},
	head: ({ loaderData }) => ({
		meta: [
			{ description: loaderData?.description },
			{ title: `${loaderData?.title || "Not Found"} | Elemnts UI` },
			{ name: "description", content: loaderData?.description },
		],
	}),
});

const serverLoader = createServerFn({
	method: "GET",
})
	.validator((slugs: string[]) => slugs)
	.handler(async ({ data: slugs }) => {
		const page = source.getPage(slugs);

		if (!page) throw notFound();

		return {
			path: page.path,
			title: page.data.title,
			description: page.data.description,
			pageTree: await source.serializePageTree(source.getPageTree()),
		};
	});

const clientLoader = browserCollections.docs.createClientLoader({
	component({ toc, frontmatter, default: MDX }, _props: undefined) {
		return (
			<DocsLayout.Page toc={toc}>
				<DocsLayout.PageBody>
					<DocsLayout.PageTitle>{frontmatter.title}</DocsLayout.PageTitle>
					<DocsLayout.PageDescription>
						{frontmatter.description}
					</DocsLayout.PageDescription>
					<MDX components={getMDXComponents()} />
				</DocsLayout.PageBody>
				<DocsLayout.PageToc />
			</DocsLayout.Page>
		);
	},
});

function Page() {
	const data = useFumadocsLoader(Route.useLoaderData());
	const content = clientLoader.useContent(data.path);

	return (
		<DocsLayout pageTree={data.pageTree}>
			<DocsLayout.Header />
			<DocsLayout.Content>
				<DocsLayout.Sidebar />
				<Suspense fallback={null}>{content}</Suspense>
			</DocsLayout.Content>
		</DocsLayout>
	);
}
