import type { ComponentProps } from "react";

import {
	CollapsibleContent,
	CollapsibleContext,
	CollapsibleIndicator,
	CollapsibleRoot,
	CollapsibleRootProvider,
	CollapsibleTrigger,
} from "./collapsible";

export type CollapsibleRootProviderProps = ComponentProps<
	typeof CollapsibleRootProvider
>;
export type CollapsibleRootProps = ComponentProps<typeof CollapsibleRoot>;
export type CollapsibleTriggerProps = ComponentProps<typeof CollapsibleTrigger>;
export type CollapsibleContentProps = ComponentProps<typeof CollapsibleContent>;
export type CollapsibleIndicatorProps = ComponentProps<
	typeof CollapsibleIndicator
>;
export type CollapsibleContextProps = ComponentProps<typeof CollapsibleContext>;

export const Collapsible = Object.assign(CollapsibleRoot, {
	RootProvider: CollapsibleRootProvider,
	Root: CollapsibleRoot,
	Trigger: CollapsibleTrigger,
	Content: CollapsibleContent,
	Indicator: CollapsibleIndicator,
	Context: CollapsibleContext,
});

export type Collapsible = {
	RootProviderProps: CollapsibleRootProviderProps;
	Root: CollapsibleRootProps;
	Trigger: CollapsibleTriggerProps;
	Content: CollapsibleContentProps;
	Indicator: CollapsibleIndicatorProps;
	Context: CollapsibleContextProps;
	Props: CollapsibleRootProps;
};

export type {
	CollapsibleOpenChangeDetails,
	UseCollapsibleContext,
	UseCollapsibleProps,
	UseCollapsibleReturn,
} from "@ark-ui/react/collapsible";
export {
	useCollapsible,
	useCollapsibleContext,
} from "@ark-ui/react/collapsible";

export {
	CollapsibleContent,
	CollapsibleContext,
	CollapsibleIndicator,
	CollapsibleRoot,
	CollapsibleRootProvider,
	CollapsibleTrigger,
};
