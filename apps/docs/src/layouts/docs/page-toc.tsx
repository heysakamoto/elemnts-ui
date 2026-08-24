import { Box } from "@moto-ui/react";
import * as FumadocsToc from "fumadocs-core/toc";
import { useRef } from "react";

import { useDocsLayoutPageContext } from "./client";
import { css } from "@/styled-system/css";

export function DocsLayoutPageToc() {
	const { toc } = useDocsLayoutPageContext();
	const viewRef = useRef<HTMLDivElement>(null);

  return (
    <FumadocsToc.AnchorProvider toc={toc}>
      <Box top="40" hideBelow="lg" position="sticky" h="calc(100dvh - 40px)">
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
                borderLeft: "1px solid {colors.stroke.primary}",
                _hover: {
                  color: "fg.primary",
                },
                "&:is([data-active=true])": {
                  color: "fg.primary",
                },
              })}
              style={{
                marginLeft: node.depth <= 2 ? 0 : node.depth * 4,
                paddingLeft: node.depth <= 2 ? 0 : node.depth * 4,
                borderLeft:
                  node.depth <= 2
                    ? "none"
                    : "1px solid {colors.stroke.primary}",
              }}
            >
              {node.title}
            </FumadocsToc.TOCItem>
          ))}
        </FumadocsToc.ScrollProvider>
      </Box>
    </FumadocsToc.AnchorProvider>
  );
}
