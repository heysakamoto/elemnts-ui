import type { ComponentProps } from "react";
import {
	TooltipArrow,
	TooltipArrowTip,
	TooltipContent,
	TooltipContext,
	TooltipPositioner,
	TooltipRoot,
	TooltipRootProvider,
	TooltipTrigger,
} from "./tooltip";

export type TooltipArrowProps = ComponentProps<typeof TooltipArrow>;
export type TooltipArrowTipProps = ComponentProps<typeof TooltipArrowTip>;
export type TooltipContentProps = ComponentProps<typeof TooltipContent>;
export type TooltipContextProps = ComponentProps<typeof TooltipContext>;
export type TooltipPositionerProps = ComponentProps<typeof TooltipPositioner>;
export type TooltipRootProps = ComponentProps<typeof TooltipRoot>;
export type TooltipRootProviderProps = ComponentProps<
	typeof TooltipRootProvider
>;
export type TooltipTriggerProps = ComponentProps<typeof TooltipTrigger>;

export const Tooltip = Object.assign(TooltipRoot, {
	Arrow: TooltipArrow,
	ArrowTip: TooltipArrowTip,
	Content: TooltipContent,
	Context: TooltipContext,
	Positioner: TooltipPositioner,
	Root: TooltipRoot,
	RootProvider: TooltipRootProvider,
	Trigger: TooltipTrigger,
});

export type Tooltip = {
	Props: TooltipRootProps;
	RootProviderProps: TooltipRootProviderProps;
	ArrowProps: TooltipArrowProps;
	ArrowTipProps: TooltipArrowTipProps;
	ContentProps: TooltipContentProps;
	ContextProps: TooltipContextProps;
	PositionerProps: TooltipPositionerProps;
	RootProps: TooltipRootProps;
	TriggerProps: TooltipTriggerProps;
};

export type {
	UseTooltipContext,
	UseTooltipProps,
	UseTooltipReturn,
} from "@ark-ui/react/tooltip";

export { useTooltip, useTooltipContext } from "@ark-ui/react/tooltip";

export {
	TooltipArrow,
	TooltipArrowTip,
	TooltipContent,
	TooltipContext,
	TooltipPositioner,
	TooltipRoot,
	TooltipRootProvider,
	TooltipTrigger,
};
