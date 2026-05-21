import type { ComponentProps } from "react";
import {
	PopoverAnchor,
	PopoverArrow,
	PopoverArrowTip,
	PopoverCloseTrigger,
	PopoverContent,
	PopoverContext,
	PopoverDescription,
	PopoverIndicator,
	PopoverPositioner,
	PopoverRoot,
	PopoverRootProvider,
	PopoverTitle,
	PopoverTrigger,
} from "./popover";

export type PopoverRootProviderProps = ComponentProps<
	typeof PopoverRootProvider
>;
export type PopoverRootProps = ComponentProps<typeof PopoverRoot>;
export type PopoveAnchorProps = ComponentProps<typeof PopoverAnchor>;
export type PopoverArrowProps = ComponentProps<typeof PopoverArrow>;
export type PopoverArrowTipProps = ComponentProps<typeof PopoverArrowTip>;
export type PopoverCloseTriggerProps = ComponentProps<
	typeof PopoverCloseTrigger
>;
export type PopoverContentProps = ComponentProps<typeof PopoverContent>;
export type PopoverContextProps = ComponentProps<typeof PopoverContext>;
export type PopoverDescriptionProps = ComponentProps<typeof PopoverDescription>;
export type PopoverIndicatorProps = ComponentProps<typeof PopoverIndicator>;
export type PopoverPositionerProps = ComponentProps<typeof PopoverPositioner>;
export type PopoverTitleProps = ComponentProps<typeof PopoverTitle>;
export type PopoverTriggerProps = ComponentProps<typeof PopoverTrigger>;
export type PopoverAnchorProps = ComponentProps<typeof PopoverAnchor>;

export const Popover = Object.assign(PopoverRoot, {
	Anchor: PopoverAnchor,
	Arrow: PopoverArrow,
	ArrowTip: PopoverArrowTip,
	CloseTrigger: PopoverCloseTrigger,
	Content: PopoverContent,
	Context: PopoverContext,
	Description: PopoverDescription,
	Indicator: PopoverIndicator,
	Positioner: PopoverPositioner,
	Root: PopoverRoot,
	RootProvider: PopoverRootProvider,
	Title: PopoverTitle,
	Trigger: PopoverTrigger,
});

export type Popover = {
	RootProviderProps: PopoverRootProviderProps;
	RootProps: PopoverRootProps;
	ContextProps: PopoverContextProps;
	ContentProps: PopoverContentProps;
	TitleProps: PopoverTitleProps;
	TriggerProps: PopoverTriggerProps;
	PositionerProps: PopoverPositionerProps;
	ArrowProps: PopoverArrowProps;
	ArrowTipProps: PopoverArrowTipProps;
	DescriptionProps: PopoverDescriptionProps;
	IndicatorProps: PopoverIndicatorProps;
	CloseTriggerProps: PopoverCloseTriggerProps;
	AnchorProps: PopoverAnchorProps;
	Props: PopoverRootProps;
};

export type {
	PopoverOpenChangeDetails,
	UsePopoverContext,
	UsePopoverProps,
	UsePopoverReturn,
} from "@ark-ui/react/popover";

export { usePopover, usePopoverContext } from "@ark-ui/react/popover";

export {
	PopoverAnchor,
	PopoverArrow,
	PopoverArrowTip,
	PopoverCloseTrigger,
	PopoverContent,
	PopoverContext,
	PopoverDescription,
	PopoverIndicator,
	PopoverPositioner,
	PopoverRoot,
	PopoverRootProvider,
	PopoverTitle,
	PopoverTrigger,
};
