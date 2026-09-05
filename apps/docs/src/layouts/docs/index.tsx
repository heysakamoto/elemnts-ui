import { Container, Grid, Section } from "@elemnts-ui/react";
import type { PropsWithChildren } from "react";

import {
	DocsLayoutContext,
	type UseDocsLayoutProps,
	useDocsLayout,
} from "./client";
import { DocsLayoutCommandMenu } from "./command-menu";
import { DocsLayoutHeader } from "./header";
import { DocsLayoutMobileMenu } from "./mobile-menu";
import { DocsLayoutPage } from "./page";
import { DocsLayoutPageBody } from "./page-body";
import { DocsLayoutPageDescription } from "./page-description";
import { DocsLayoutPageTitle } from "./page-title";
import { DocsLayoutPageToc } from "./page-toc";
import { DocsLayoutSidebar } from "./sidebar";

type DocsLayoutRootProps = PropsWithChildren<UseDocsLayoutProps>;
function DocsLayoutRoot(props: DocsLayoutRootProps) {
	const { pageTree, children } = props;
	const value = useDocsLayout({ pageTree });

	return (
		<DocsLayoutContext.Provider value={value}>
			<DocsLayoutCommandMenu>
				<DocsLayoutMobileMenu>
					<Section as="main" colorPalette="neutral">
						{children}
					</Section>
				</DocsLayoutMobileMenu>
			</DocsLayoutCommandMenu>
		</DocsLayoutContext.Provider>
	);
}

function DocsLayoutContent(props: PropsWithChildren) {
	const { children } = props;

	return (
		<Section as="main">
			<Container maxW="var(--docs-width)">
				<Grid
					gridTemplateColumns={{
						base: "minmax(0, 1fr)",
						md: "var(--sidebar-width) minmax(0, 1fr)",
					}}
				>
					{children}
				</Grid>
			</Container>
		</Section>
	);
}

export const DocsLayout = Object.assign(DocsLayoutRoot, {
	Root: DocsLayoutRoot,
	Page: DocsLayoutPage,
	Header: DocsLayoutHeader,
	Content: DocsLayoutContent,
	Sidebar: DocsLayoutSidebar,
	PageToc: DocsLayoutPageToc,
	PageBody: DocsLayoutPageBody,
	PageTitle: DocsLayoutPageTitle,
	PageDescription: DocsLayoutPageDescription,
});
