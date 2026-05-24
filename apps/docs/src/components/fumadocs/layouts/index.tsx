import { Container, Grid, GridItem, ScrollShadow } from "@moto-ui/react";
import { DocsLayoutProvider, type DocsLayoutProviderProps } from "./client";
import { Header } from "./header";
import { Loader } from "./loader";
import { Description, Page, Title } from "./page";
import { Sidebar } from "./sidebar";
import { Toc } from "./toc";

type RootProps = DocsLayoutProviderProps;
export const Root = (props: RootProps) => {
	const { pageTree, children } = props;

	return (
		<DocsLayoutProvider pageTree={pageTree}>
			<Grid
				gap="0"
				justifyContent="space-between"
				cols={{
					base: "minmax(0, 1fr)",
					md: "14rem 1fr",
					lg: "13rem 1fr 13rem",
				}}
			>
				<GridItem
					h="92"
					top="0"
					w="full"
					zIndex="2"
					as="header"
					position="sticky"
					gridColumn="1 / -1"
					bgColor="bg.primary"
				>
					<Header />
				</GridItem>
				<ScrollShadow
					px="12"
					py="16"
					top="92"
					as="aside"
					size={80}
					hideBelow="md"
					position="sticky"
					h="calc(100vh - 92px)"
					borderRight="1px solid"
					borderColor="stroke.primary"
				>
					<Sidebar />
				</ScrollShadow>
				<GridItem
					py="32"
					as="main"
				>
					<Container
						px="12"
						maxW="36rem"
					>
						{children}
					</Container>
				</GridItem>
				<GridItem
					px="12"
					py="16"
					top="92"
					as="aside"
					hideBelow="lg"
					position="sticky"
					h="calc(100vh - 92px)"
				>
					<Toc />
				</GridItem>
			</Grid>
		</DocsLayoutProvider>
	);
};

export const DocsLayout = Object.assign(Root, {
	Root,
	Page,
	Title,
	Sidebar,
	Loader,
	Description,
});
