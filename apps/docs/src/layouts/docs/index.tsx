import { Grid, Separator, Surface } from "@moto-ui/react";
import type { PropsWithChildren } from "react";

import {
	DocsLayoutProvider,
  type UseDocsLayoutProps,
	useDocsLayout,
} from "./client";
import { DocsLayoutHeader } from "./header";
import { DocsLayoutMobileNav } from "./mobile-nav";
import { DocsLayoutPage } from "./page";
import { DocsLayoutPageBody } from "./page-body";
import { DocsLayoutPageDescription } from "./page-description";
import { DocsLayoutPageTitle } from "./page-title";
import { DocsLayoutPageToc } from "./page-toc";
import { DocsLayoutSidebar } from "./sidebar";
import { Search } from "@/features/search";

type DocsLayoutRootProps = PropsWithChildren<UseDocsLayoutProps>;
function DocsLayoutRoot(props: DocsLayoutRootProps) {
	const { pageTree, children } = props;
	const value = useDocsLayout({ pageTree });

  return (
    <DocsLayoutProvider value={value}>
      <Search.Root>
        <Search.Drawer />
        <Grid
          gap="0"
          align="start"
          colorPalette="neutral"
          justify="space-between"
          cols={{ base: "minmax(0, 1fr)", md: "34rem 1px 1fr" }}
        >
          <Surface
            top="0"
            delta={6}
            h="100dvh"
            align="end"
            hideBelow="md"
            display="flex"
            elevated={false}
            position="sticky"
            direction="column"
          >
            <Surface.Content w="50%" h="full">
              <DocsLayoutSidebar />
            </Surface.Content>
          </Surface>
          <Separator h="100%" hideBelow="md" orientation="horizontal" />
          {children}
        </Grid>
        <DocsLayoutMobileNav />
      </Search.Root>
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
	PageDescription: DocsLayoutPageDescription,
});
