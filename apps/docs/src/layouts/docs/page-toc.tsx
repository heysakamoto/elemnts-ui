import { Box } from "@moto-ui/react";
import { css } from "@moto-ui/styled-system/css";
import * as FumadocsToc from "fumadocs-core/toc";
import { useRef } from "react";

import { useDocsLayoutPageContext } from "./client";

export function DocsLayoutPageToc() {
	const { toc } = useDocsLayoutPageContext();
	const viewRef = useRef<HTMLDivElement>(null);

	return (
		<FumadocsToc.AnchorProvider toc={toc}>
			<Box
				top="112px"
				hideBelow="lg"
				position="sticky"
				h="calc(100dvh - 112px)"
			>
				<FumadocsToc.ScrollProvider containerRef={viewRef}>
					{toc.map((node) => (
						<FumadocsToc.TOCItem
							key={node.url}
							href={node.url}
							className={css({
								py: "2",
								fontSize: "13",
								display: "flex",
								fontWeight: "400",
								color: "fg.tertiary",
								_hover: {
									color: "fg.primary",
								},
								"&:is([data-active=true])": {
									color: "fg.primary",
								},
							})}
						>
							{node.title}
						</FumadocsToc.TOCItem>
					))}
				</FumadocsToc.ScrollProvider>
			</Box>
		</FumadocsToc.AnchorProvider>
	);
}
