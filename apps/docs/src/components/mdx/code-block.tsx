import { Separator, Show, Surface, Text } from "@moto-ui/react";
import type { ReactElement, ReactNode } from "react";

import { CodeBlockProvider, useCodeBlockTabsContext } from "./client";
import { CopyButton } from "./copy-button";
import { nodeToString } from "@/utils/node";

type CodeBlockProps = {
	title?: string;
	lang?: string;
  icon?: ReactNode;
	children?: ReactElement<any>;
};

export const CodeBlock = (props: CodeBlockProps) => {
	const { title, lang, children } = props;
	const inTabs = useCodeBlockTabsContext();

	switch (true) {
		case inTabs: {
			return children;
		}

		default: {
			const code = nodeToString(children);

      return (
        <CodeBlockProvider>
          <Surface
            mt="24"
            delta={1}
            rounded="16"
            shadowLevel={0}
            position="relative"
            data-language={lang}
          >
            <CopyButton top="8" right="8" value={code} position="absolute" />
            <Show when={title}>
              <Surface.Header
                px="16"
                py="12"
                align="center"
                direction="row"
                justify="space-between"
              >
                <Surface.Description
                  fontSize="12"
                  fontFamily="mono"
                  fontStyle="italic"
                >
                  {title}
                </Surface.Description>
              </Surface.Header>
              <Separator orientation="horizontal" />
            </Show>
            <Surface.Content
              py="12"
              px="16"
              maxH="32rem"
              overflow="scroll"
              scrollbar="hidden"
            >
              <Text
                as="code"
                fontSize="12"
                fontFamily="mono"
                css={{
                  tabSize: 2,
                  "& span.line": {
                    lineHeight: "2",
                    display: "block",
                    whiteSpace: "pre",
                    "& span": {
                      color: "var(--shiki-light)",
                      _dark: {
                        color: "var(--shiki-dark)",
                      },
                    },
                  },
                }}
              >
                {children}
              </Text>
            </Surface.Content>
          </Surface>
        </CodeBlockProvider>
      );
    }
  }
};

CodeBlock.displayName = "CodeBlock";
