import { Toc } from "@elemnts-ui/react";
import type { PropsWithChildren } from "react";

import {
	DocsLayoutPageContext,
	type UseDocsLayoutPageProps,
	useDocsLayoutPage,
} from "./client";

type DocsLayoutPageProps = PropsWithChildren<UseDocsLayoutPageProps>;

export function DocsLayoutPage(props: DocsLayoutPageProps) {
	const { toc, children } = props;
	const value = useDocsLayoutPage({ toc });

	return (
		<DocsLayoutPageContext.Provider value={value}>
			<Toc
				items={value.items}
				gridTemplateColumns={{
					base: "minmax(0, 1fr)",
					lg: "minmax(0, 1fr) var(--toc-width)",
				}}
			>
				{children}
			</Toc>
		</DocsLayoutPageContext.Provider>
	);
}
