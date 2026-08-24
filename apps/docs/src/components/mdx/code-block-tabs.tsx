import { Separator, Surface, Tabs, Text } from "@moto-ui/react";
import { Fragment, type PropsWithChildren, type ReactNode } from "react";

import { CodeBlockTabsProvider } from "./client";
import { CopyButton } from "./copy-button";
import { nodeToString } from "@/utils/node";

export const CodeBlockTabsRoot = (
	props: PropsWithChildren<{ defaultValue?: string }>,
) => {
	const { children, defaultValue } = props;

  return (
    <CodeBlockTabsProvider>
      <Surface
        mt="24"
        delta={1}
        rounded="16"
        shadowLevel={0}
        position="relative"
      >
        <Tabs size="xs" defaultValue={defaultValue}>
          {children}
        </Tabs>
      </Surface>
    </CodeBlockTabsProvider>
  );
};

CodeBlockTabsRoot.displayName = "CodeBlockTabsRoot";

export const CodeBlockTabsList = (props: PropsWithChildren) => {
	const { children } = props;

  return (
    <Fragment>
      <Surface
        py="4"
        px="4"
        w="fit"
        h="auto"
        delta={2}
        rounded="full"
        elevated={false}
      >
        <Tabs.List w="12rem">
          <Tabs.Indicator rounded="12" />
          {children}
        </Tabs.List>
      </Surface>
      <Separator orientation="horizontal" />
    </Fragment>
  );
};

CodeBlockTabsList.displayName = "CodeBlockTabsList";

type CodeBlockTabsTriggerProps = {
	children: ReactNode;
	value: string;
};

export const CodeBlockTabsTrigger = (props: CodeBlockTabsTriggerProps) => {
  const { children, value } = props;
  return (
    <Tabs.Trigger
      value={value}
      fontSize="13"
      fontWeight="medium"
      textTransform="lowercase"
    >
      {children}
    </Tabs.Trigger>
  );
};

CodeBlockTabsTrigger.displayName = "CodeBlockTabsTrigger";

type CodeBlockTabsPanelProps = {
	children: ReactNode;
	value: string;
};

export const CodeBlockTabsPanel = (props: CodeBlockTabsPanelProps) => {
	const { children, value } = props;

	const code = nodeToString(children);

  return (
    <Tabs.Content value={value}>
      <Surface.Content px="16" py="12" fontSize="12">
        <Text
          as="code"
          fontFamily="mono"
          css={{
            tabSize: 2,
            "& span.line": {
              lineHeight: 2,
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

				<CopyButton
          value={code}
          rounded="12"
					position="absolute"
          inset="3px 4px auto auto"
				/>
			</Surface.Content>
		</Tabs.Content>
	);
};

CodeBlockTabsPanel.displayName = "CodeBlockTabsPanel";

export const CodeBlockTabs = Object.assign(CodeBlockTabsRoot, {
	List: CodeBlockTabsList,
	Trigger: CodeBlockTabsTrigger,
	Panel: CodeBlockTabsPanel,
	Root: CodeBlockTabsRoot,
});
