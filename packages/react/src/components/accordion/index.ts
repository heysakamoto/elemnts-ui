import type { ComponentProps } from "react";

import {
	AccordionContext,
	AccordionItem,
	AccordionItemContent,
	AccordionItemContext,
	AccordionItemIndicator,
	AccordionItemTrigger,
	AccordionRoot,
	AccordionRootProvider,
	AccordionSeparator,
} from "./accordion";

export type AccordionRootProviderProps = ComponentProps<
	typeof AccordionRootProvider
>;
export type AccordionRootProps = ComponentProps<typeof AccordionRoot>;
export type AccordionItemProps = ComponentProps<typeof AccordionItem>;
export type AccordionItemTriggerProps = ComponentProps<
	typeof AccordionItemTrigger
>;
export type AccordionItemContentProps = ComponentProps<
	typeof AccordionItemContent
>;
export type AccordionItemIndicatorProps = ComponentProps<
	typeof AccordionItemIndicator
>;
export type AccordionSeparatorProps = ComponentProps<typeof AccordionSeparator>;
export type AccordionItemContextProps = ComponentProps<
	typeof AccordionItemContext
>;
export type AccordionContextProps = ComponentProps<typeof AccordionContext>;

export const Accordion = Object.assign(AccordionRoot, {
	Root: AccordionRoot,
	RootProvider: AccordionRootProvider,
	Item: AccordionItem,
	ItemContext: AccordionItemContext,
	Separator: AccordionSeparator,
	ItemTrigger: AccordionItemTrigger,
	ItemContent: AccordionItemContent,
	ItemIndicator: AccordionItemIndicator,
	Context: AccordionContext,
});

export type Accordion = {
	Props: AccordionRootProps;
	RootProps: AccordionRootProps;
	RootProviderProps: AccordionRootProviderProps;
	ItemProps: AccordionItemProps;
	ItemContextProps: AccordionItemContextProps;
	SeparatorProps: AccordionSeparatorProps;
	ItemTriggerProps: AccordionItemTriggerProps;
	ItemContentProps: AccordionItemContentProps;
	ItemIndicatorProps: AccordionItemIndicatorProps;
	ContextProps: AccordionContextProps;
};

export type {
	AccordionFocusChangeDetails,
	AccordionValueChangeDetails,
	UseAccordionContext,
	UseAccordionItemContext,
	UseAccordionProps,
	UseAccordionReturn,
} from "@ark-ui/react/accordion";
export {
	useAccordion,
	useAccordionContext,
	useAccordionItemContext,
} from "@ark-ui/react/accordion";

export {
	AccordionItem,
	AccordionItemContent,
	AccordionItemContext,
	AccordionItemIndicator,
	AccordionItemTrigger,
	AccordionRoot,
	AccordionRootProvider,
	AccordionSeparator,
};
