import type { ComponentProps } from "react";
import {
	TabsContent,
	TabsContext,
	TabsIndicator,
	TabsList,
	TabsPanel,
	TabsRoot,
	TabsRootProvider,
	TabsTrigger,
} from "./tabs";

export type TabsRootProviderProps = ComponentProps<typeof TabsRootProvider>;
export type TabsRootProps = ComponentProps<typeof TabsRoot>;
export type TabsContentProps = ComponentProps<typeof TabsContent>;
export type TabsContextProps = ComponentProps<typeof TabsContext>;
export type TabsIndicatorProps = ComponentProps<typeof TabsIndicator>;
export type TabsListProps = ComponentProps<typeof TabsList>;
export type TabsPanelProps = ComponentProps<typeof TabsPanel>;
export type TabsTriggerProps = ComponentProps<typeof TabsTrigger>;

export const Tabs = Object.assign(TabsRoot, {
	Content: TabsContent,
	Context: TabsContext,
	Indicator: TabsIndicator,
	List: TabsList,
	Panel: TabsPanel,
	Root: TabsRoot,
	RootProvider: TabsRootProvider,
	Trigger: TabsTrigger,
});

export type Tabs = {
	Props: TabsRootProps;
	RootProviderProps: TabsRootProviderProps;
	ContentProps: TabsContentProps;
	ContextProps: TabsContextProps;
	IndicatorProps: TabsIndicatorProps;
	ListProps: TabsListProps;
	PanelProps: TabsPanelProps;
	RootProps: TabsRootProps;
	TriggerProps: TabsTriggerProps;
};

export type {
	TabsFocusChangeDetails,
	TabsValueChangeDetails,
	UseTabsContext,
	UseTabsProps,
	UseTabsReturn,
} from "@ark-ui/react/tabs";

export { useTabs, useTabsContext } from "@ark-ui/react/tabs";

export {
	TabsContent,
	TabsContext,
	TabsIndicator,
	TabsList,
	TabsPanel,
	TabsRoot,
	TabsRootProvider,
	TabsTrigger,
};
