import { Separator, Tabs } from "@elemnts-ui/react";
import { Fragment, type PropsWithChildren, type ReactNode } from "react";
import { CodeBlockTabsProvider } from "./client";

export const CodeBlockTabsRoot = (
	props: PropsWithChildren<{ defaultValue?: string }>,
) => {
	const { children, defaultValue } = props;

	return (
		<CodeBlockTabsProvider>
			<Tabs
				mt="24"
				gap="0"
				size="xs"
				variant="tertiary"
				defaultValue={defaultValue}
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
		<Fragment>
			<Tabs.List w="12rem">
				<Tabs.Indicator rounded="12" />
				{children}
			</Tabs.List>
			<Separator />
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
		<Tabs.Trigger value={value} fontSize="13" fontWeight="medium">
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
	return <Tabs.Content value={value}>{children}</Tabs.Content>;
};

CodeBlockTabsPanel.displayName = "CodeBlockTabsPanel";

export const CodeBlockTabs = Object.assign(CodeBlockTabsRoot, {
	List: CodeBlockTabsList,
	Trigger: CodeBlockTabsTrigger,
	Panel: CodeBlockTabsPanel,
	Root: CodeBlockTabsRoot,
});
