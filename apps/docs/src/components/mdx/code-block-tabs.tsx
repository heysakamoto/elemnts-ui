import { Surface, Tabs } from "@moto-ui/react";
import type { PropsWithChildren, ReactNode } from "react";
import { nodeToString } from "@/utils/node";
import { CodeBlockTabsProvider } from "./client";
import { CopyButton } from "./copy-button";

export const CodeBlockTabsRoot = (
	props: PropsWithChildren<{ defaultValue?: string }>,
) => {
	const { children, defaultValue } = props;

	return (
		<CodeBlockTabsProvider>
			<Tabs
				size="xs"
				mt="24"
				defaultValue={defaultValue}
				position="relative"
			>
				{children}
			</Tabs>
		</CodeBlockTabsProvider>
	);
};

CodeBlockTabsRoot.displayName = "CodeBlockTabsRoot";

export const CodeBlockTabsList = (props: PropsWithChildren) => {
	const { children } = props;

	return (
		<Surface
			delta={6}
			shadowLevel={0}
			w="full"
			p="2"
			roundedTop="16"
		>
			<Tabs.List w="12rem">
				<Tabs.Indicator rounded="12" />
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
			fontSize="13"
			fontWeight="medium"
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
			<Surface
				py="8"
				px="12"
				mt="-1"
				delta={1}
				shadowLevel={0}
				roundedBottom="16"
			>
				{children}
				<CopyButton
					size="sm"
					value={code}
					position="absolute"
					inset="3px 4px auto auto"
				/>
			</Surface>
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
