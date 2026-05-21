import type { ComponentProps } from "react";
import {
	HoverCardArrow,
	HoverCardArrowTip,
	HoverCardContent,
	HoverCardContext,
	HoverCardPositioner,
	HoverCardRoot,
	HoverCardRootProvider,
	HoverCardTrigger,
} from "./hover-card";

export type HoverCardRootProviderProps = ComponentProps<
	typeof HoverCardRootProvider
>;
export type HoverCardRootProps = ComponentProps<typeof HoverCardRoot>;
export type HoverCardArrowProps = ComponentProps<typeof HoverCardArrow>;
export type HoverCardArrowTipProps = ComponentProps<typeof HoverCardArrowTip>;
export type HoverCardContentProps = ComponentProps<typeof HoverCardContent>;
export type HoverCardPositionerProps = ComponentProps<
	typeof HoverCardPositioner
>;
export type HoverCardTriggerProps = ComponentProps<typeof HoverCardTrigger>;
export type HoverCardContextProps = ComponentProps<typeof HoverCardContext>;

export const HoverCard = Object.assign(HoverCardRoot, {
	RootProvider: HoverCardRootProvider,
	Root: HoverCardRoot,
	Arrow: HoverCardArrow,
	ArrowTip: HoverCardArrowTip,
	Content: HoverCardContent,
	Positioner: HoverCardPositioner,
	Trigger: HoverCardTrigger,
	Context: HoverCardContext,
});

export type HoverCard = {
	RootProviderProps: HoverCardRootProviderProps;
	RootProps: HoverCardRootProps;
	ArrowProps: HoverCardArrowProps;
	ArrowTipProps: HoverCardArrowTipProps;
	ContentProps: HoverCardContentProps;
	PositionerProps: HoverCardPositionerProps;
	TriggerProps: HoverCardTriggerProps;
	ContextProps: HoverCardContextProps;
	Props: HoverCardRootProps;
};

export type {
	HoverCardOpenChangeDetails,
	UseHoverCardContext,
	UseHoverCardProps,
	UseHoverCardReturn,
} from "@ark-ui/react/hover-card";

export { useHoverCard, useHoverCardContext } from "@ark-ui/react/hover-card";

export {
	HoverCardArrow,
	HoverCardArrowTip,
	HoverCardContent,
	HoverCardContext,
	HoverCardPositioner,
	HoverCardRoot,
	HoverCardRootProvider,
	HoverCardTrigger,
} from "./hover-card";
