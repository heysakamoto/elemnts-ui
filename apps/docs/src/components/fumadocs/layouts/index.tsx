import { Container, Grid, GridItem, ScrollShadow } from "@moto-ui/react";
import { DocsLayoutProvider, type DocsLayoutProviderProps } from "./client";
import { DocsLayoutHeader } from "./header";
import { DocsLayoutLoader } from "./loader";
import { DocsLayoutDescription, DocsLayoutPage, DocsLayoutTitle } from "./page";
import { DocsLayoutSidebar } from "./sidebar";
import { DocsLayoutToc } from "./toc";

type RootProps = DocsLayoutProviderProps;
export const Root = (props: RootProps) => {
	const { pageTree, children } = props;

	return (
		<DocsLayoutProvider pageTree={pageTree}>
			<Container maxW="90rem">
				<DocsLayoutToc.Mobile />
				<DocsLayoutHeader.Sub />
				<Grid
					gap="0"
					justifyContent="space-between"
					cols={{
						md: "14rem 1fr",
						lg: "13rem 1fr 13rem",
						base: "minmax(0, 1fr)",
					}}
				>
					<GridItem
						h="56"
						top="0"
						w="full"
						zIndex="2"
						as="header"
						position="sticky"
						gridColumn="1/-1"
						bgColor="bg.primary"
					>
						<DocsLayoutHeader />
					</GridItem>
					<ScrollShadow
						pr="12"
						py="16"
						top="56"
						as="aside"
						size={80}
						hideBelow="md"
						position="sticky"
						h="calc(100vh - 56px)"
						borderRight="1px solid"
						borderColor="stroke.primary"
					>
						<DocsLayoutSidebar />
					</ScrollShadow>
					<Container
						px="12"
						maxW="36rem"
						py={{ base: "72", md: "32" }}
					>
						{children}
					</Container>
					<GridItem
						py="32"
						top="56"
						as="aside"
						hideBelow="lg"
						position="sticky"
						h="calc(100vh - 56px)"
					>
						<DocsLayoutToc />
					</GridItem>
				</Grid>
			</Container>
		</DocsLayoutProvider>
	);
};

export const DocsLayout = Object.assign(Root, {
	Root,
	Page: DocsLayoutPage,
	Title: DocsLayoutTitle,
	Loader: DocsLayoutLoader,
	Sidebar: DocsLayoutSidebar,
	Description: DocsLayoutDescription,
});
