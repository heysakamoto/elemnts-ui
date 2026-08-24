import { Grid, Section } from "@moto-ui/react";
import type { PropsWithChildren } from "react";

import {
	type DocsLayoutPageContextValue,
	DocsLayoutPageProvider,
} from "./client";

type DocsLayoutPageProps = PropsWithChildren<DocsLayoutPageContextValue>;

export function DocsLayoutPage(props: DocsLayoutPageProps) {
	const { toc, children } = props;

	return (
		<DocsLayoutPageProvider value={{ toc }}>
			<Section as="main">
				<Grid
					gap="0"
					cols={{ base: "minmax(0, 1fr)", lg: "1fr 14rem" }}
				>
					{children}
				</Grid>
			</Section>
		</DocsLayoutPageProvider>
	);
}
