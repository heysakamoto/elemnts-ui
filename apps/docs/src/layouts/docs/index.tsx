import { Grid } from "@moto-ui/react";
import type { PropsWithChildren } from "react";

import { type DocsLayoutContextValue, DocsLayoutProvider } from "./client";
import { DocsLayoutHeader } from "./header";
import { DocsLayoutPage } from "./page";
import { DocsLayoutPageBody } from "./page-body";
import { DocsLayoutPageDescription } from "./page-description";
import { DocsLayoutPageLoader } from "./page-loader";
import { DocsLayoutPageTitle } from "./page-title";
import { DocsLayoutPageToc } from "./page-toc";
import { DocsLayoutSidebar } from "./sidebar";

type DocsLayoutRootProps = PropsWithChildren<DocsLayoutContextValue>;
function DocsLayoutRoot(props: DocsLayoutRootProps) {
	const { pageTree, children } = props;

	return (
		<DocsLayoutProvider value={{ pageTree }}>
			<Grid
				gap="0"
				align="start"
				justify="space-between"
				colorPalette="neutral"
				cols={{ base: "minmax(0, 1fr)", md: "15rem 1fr" }}
			>
				{children}
			</Grid>
		</DocsLayoutProvider>
	);
}

export const DocsLayout = Object.assign(DocsLayoutRoot, {
	Root: DocsLayoutRoot,
	Page: DocsLayoutPage,
	Header: DocsLayoutHeader,
	PageToc: DocsLayoutPageToc,
	Sidebar: DocsLayoutSidebar,
	PageBody: DocsLayoutPageBody,
	PageTitle: DocsLayoutPageTitle,
	PageLoader: DocsLayoutPageLoader,
	PageDescription: DocsLayoutPageDescription,
});
