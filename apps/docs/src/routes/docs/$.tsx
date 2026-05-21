import { createFileRoute, notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import browserCollections from "collections/browser";
import { useFumadocsLoader } from "fumadocs-core/source/client";
import { Suspense } from "react";
import { DocsLayout } from "@/components/fumadocs/layouts";
import { getMDXComponents } from "@/components/fumadocs/mdx";
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
			{ title: `${loaderData?.title || "Not Found"} | Moto UI` },
			{ name: "description", content: loaderData?.description },
		],
		links: [
			{
				rel: "icon",
			},
		],
		styles: [],
	}),
});

const serverLoader = createServerFn({
	method: "GET",
})
	.inputValidator((slugs: string[]) => slugs)
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
				<DocsLayout.Title>{frontmatter.title}</DocsLayout.Title>
				<DocsLayout.Description>
					{frontmatter.description}
				</DocsLayout.Description>
				<MDX components={getMDXComponents()} />
			</DocsLayout.Page>
		);
	},
});

function Page() {
	const data = useFumadocsLoader(Route.useLoaderData());

	if (!data) return null;

	return (
		<DocsLayout pageTree={data.pageTree}>
			<Suspense>{data.path ? <MDXContent path={data.path} /> : null}</Suspense>
		</DocsLayout>
	);
}

function MDXContent({ path }: { path: string }) {
	return clientLoader.useContent(path);
}
