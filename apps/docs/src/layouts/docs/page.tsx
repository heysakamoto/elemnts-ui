import { Grid } from "@moto-ui/react";
import type { PropsWithChildren } from "react";

import {
	DocsLayoutPageContext,
	type DocsLayoutPageContextValue,
} from "./client";

type DocsLayoutPageProps = PropsWithChildren<DocsLayoutPageContextValue>;

export function DocsLayoutPage(props: DocsLayoutPageProps) {
	const { toc, children } = props;

	return (
		<DocsLayoutPageContext.Provider value={{ toc }}>
			<Grid
				gridTemplateColumns={{
					base: "minmax(0, 1fr)",
					lg: "minmax(0, 1fr) var(--toc-width)",
				}}
			>
				{children}
			</Grid>
		</DocsLayoutPageContext.Provider>
	);
}
