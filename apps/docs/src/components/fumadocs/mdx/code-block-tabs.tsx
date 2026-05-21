import { Surface, Tabs, Text } from "@moto-ui/react";
import type { PropsWithChildren, ReactNode } from "react";
import { nodeToString } from "@/utils/react-node";
import { CodeBlockTabsProvider } from "./client";
import { CopyButton } from "./copy-button";

export const CodeBlockTabsRoot = (
	props: PropsWithChildren<{ defaultValue?: string }>,
) => {
	const { children, defaultValue } = props;

	return (
		<CodeBlockTabsProvider>
			<Surface
				my="24"
				delta={1}
				rounded="24"
				position="relative"
			>
				<Tabs
					size="xs"
					defaultValue={defaultValue}
				>
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
		<Surface
			m="8"
			w="fit"
			h="auto"
			delta={6}
			rounded="full"
			elevated={false}
		>
			<Tabs.List w="12rem">
				<Tabs.Indicator />
				{children}
			</Tabs.List>
		</Surface>
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
			fontSize="12"
			fontWeight="500"
			fontFamily="mono"
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
			<Surface.Content
				my="8"
				mx="12"
				fontSize="12"
			>
				<Text
					as="code"
					fontFamily="mono"
					css={{
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
					position="absolute"
					inset="8px 8px auto auto"
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
