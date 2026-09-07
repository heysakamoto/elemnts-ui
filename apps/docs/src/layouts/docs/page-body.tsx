import { Container, Toc } from "@elemnts-ui/react";
import type { PropsWithChildren } from "react";
import { DocsLayoutPageNavigator } from "./page-navigator";

type DocsLayoutPageBodyProps = PropsWithChildren;

export function DocsLayoutPageBody(props: DocsLayoutPageBodyProps) {
	const { children } = props;

	return (
		<Container
			spaceY="56"
			py="var(--page-offset-top)"
			maxW="var(--page-body-width)"
			px={{ base: "16", md: "24" }}
		>
			<Toc.Content overflowY="unset">{children}</Toc.Content>
			<DocsLayoutPageNavigator />
		</Container>
	);
}
