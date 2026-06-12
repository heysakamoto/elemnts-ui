import type { ComponentProps } from "react";
import {
	TourActions,
	TourActionTrigger,
	TourArrow,
	TourArrowTip,
	TourBackdrop,
	TourCloseTrigger,
	TourContent,
	TourContext,
	TourControl,
	TourDescription,
	TourPositioner,
	TourProgressText,
	TourRoot,
	TourSpotlight,
	TourTitle,
} from "./tour";

export type TourActionTriggerProps = ComponentProps<typeof TourActionTrigger>;
export type TourActionsProps = ComponentProps<typeof TourActions>;
export type TourArrowProps = ComponentProps<typeof TourArrow>;
export type TourArrowTipProps = ComponentProps<typeof TourArrowTip>;
export type TourBackdropProps = ComponentProps<typeof TourBackdrop>;
export type TourCloseTriggerProps = ComponentProps<typeof TourCloseTrigger>;
export type TourContentProps = ComponentProps<typeof TourContent>;
export type TourContextProps = ComponentProps<typeof TourContext>;
export type TourControlProps = ComponentProps<typeof TourControl>;
export type TourDescriptionProps = ComponentProps<typeof TourDescription>;
export type TourPositionerProps = ComponentProps<typeof TourPositioner>;
export type TourProgressTextProps = ComponentProps<typeof TourProgressText>;
export type TourRootProps = ComponentProps<typeof TourRoot>;
export type TourSpotlightProps = ComponentProps<typeof TourSpotlight>;
export type TourTitleProps = ComponentProps<typeof TourTitle>;

export const Tour = Object.assign(TourRoot, {
	ActionTrigger: TourActionTrigger,
	Actions: TourActions,
	Arrow: TourArrow,
	ArrowTip: TourArrowTip,
	Backdrop: TourBackdrop,
	CloseTrigger: TourCloseTrigger,
	Content: TourContent,
	Context: TourContext,
	Control: TourControl,
	Description: TourDescription,
	Positioner: TourPositioner,
	ProgressText: TourProgressText,
	Root: TourRoot,
	Spotlight: TourSpotlight,
	Title: TourTitle,
});

export type Tour = {
	Props: TourRootProps;
	ActionTriggerProps: TourActionTriggerProps;
	ActionsProps: TourActionsProps;
	ArrowProps: TourArrowProps;
	ArrowTipProps: TourArrowTipProps;
	BackdropProps: TourBackdropProps;
	CloseTriggerProps: TourCloseTriggerProps;
	ContentProps: TourContentProps;
	ContextProps: TourContextProps;
	ControlProps: TourControlProps;
	DescriptionProps: TourDescriptionProps;
	PositionerProps: TourPositionerProps;
	ProgressTextProps: TourProgressTextProps;
	RootProps: TourRootProps;
	SpotlightProps: TourSpotlightProps;
	TitleProps: TourTitleProps;
};

export type {
	TourStepDetails,
	UseTourContext,
	UseTourProps,
	UseTourReturn,
} from "@ark-ui/react/tour";

export { useTour, useTourContext } from "@ark-ui/react/tour";

export {
	TourActions,
	TourActionTrigger,
	TourArrow,
	TourArrowTip,
	TourBackdrop,
	TourCloseTrigger,
	TourContent,
	TourContext,
	TourControl,
	TourDescription,
	TourPositioner,
	TourProgressText,
	TourRoot,
	TourSpotlight,
	TourTitle,
};
