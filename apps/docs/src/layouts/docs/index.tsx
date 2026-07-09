import { Grid, GridItem, Separator } from "@moto-ui/react";
import type { PropsWithChildren } from "react";

import {
	DocsLayoutProvider,
	type UseDocsLayoutReturnType,
	useDocsLayout,
} from "./client";
import { DocsLayoutHeader } from "./header";
import { DocsLayoutPage } from "./page";
import { DocsLayoutPageBody } from "./page-body";
import { DocsLayoutPageDescription } from "./page-description";
import { DocsLayoutPageLoader } from "./page-loader";
import { DocsLayoutPageTitle } from "./page-title";
import { DocsLayoutPageToc } from "./page-toc";
import { DocsLayoutSearch } from "./search";
import { DocsLayoutSidebar } from "./sidebar";

type DocsLayoutRootProps = PropsWithChildren<UseDocsLayoutReturnType>;
function DocsLayoutRoot(props: DocsLayoutRootProps) {
	const { pageTree, children } = props;
	const value = useDocsLayout({ pageTree });

	return (
		<DocsLayoutProvider value={value}>
			<DocsLayoutSearch>
				<Grid
					gap="0"
					align="start"
					justify="space-between"
					colorPalette="neutral"
					cols={{ base: "minmax(0, 1fr)", md: "16rem 1px 1fr" }}
				>
					<GridItem
						top="0"
						h="100dvh"
						as="aside"
						hideBelow="md"
						position="sticky"
					>
						<DocsLayoutSidebar />
					</GridItem>
					<Separator
						h="100%"
						hideBelow="md"
						orientation="horizontal"
					/>
					{children}
				</Grid>
			</DocsLayoutSearch>
		</DocsLayoutProvider>
	);
}

export const DocsLayout = Object.assign(DocsLayoutRoot, {
	Root: DocsLayoutRoot,
	Page: DocsLayoutPage,
	Header: DocsLayoutHeader,
	PageToc: DocsLayoutPageToc,
	PageBody: DocsLayoutPageBody,
	PageTitle: DocsLayoutPageTitle,
	PageLoader: DocsLayoutPageLoader,
	PageDescription: DocsLayoutPageDescription,
});
