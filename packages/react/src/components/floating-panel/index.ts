import type { ComponentProps } from "react";
import {
	FloatingPanelBody,
	FloatingPanelCloseTrigger,
	FloatingPanelContent,
	FloatingPanelContext,
	FloatingPanelControl,
	FloatingPanelDragTrigger,
	FloatingPanelHeader,
	FloatingPanelPositioner,
	FloatingPanelResizeTrigger,
	FloatingPanelRoot,
	FloatingPanelRootProvider,
	FloatingPanelStageTrigger,
	FloatingPanelTitle,
	FloatingPanelTrigger,
} from "./floating-panel";

export type FloatingPanelRootProviderProps = ComponentProps<
	typeof FloatingPanelRootProvider
>;
export type FloatingPanelRootProps = ComponentProps<typeof FloatingPanelRoot>;
export type FloatingPanelTriggerProps = ComponentProps<
	typeof FloatingPanelTrigger
>;
export type FloatingPanelPositionerProps = ComponentProps<
	typeof FloatingPanelPositioner
>;
export type FloatingPanelContentProps = ComponentProps<
	typeof FloatingPanelContent
>;
export type FloatingPanelHeaderProps = ComponentProps<
	typeof FloatingPanelHeader
>;
export type FloatingPanelBodyProps = ComponentProps<typeof FloatingPanelBody>;
export type FloatingPanelTitleProps = ComponentProps<typeof FloatingPanelTitle>;
export type FloatingPanelControlProps = ComponentProps<
	typeof FloatingPanelControl
>;
export type FloatingPanelCloseTriggerProps = ComponentProps<
	typeof FloatingPanelCloseTrigger
>;
export type FloatingPanelDragTriggerProps = ComponentProps<
	typeof FloatingPanelDragTrigger
>;
export type FloatingPanelResizeTriggerProps = ComponentProps<
	typeof FloatingPanelResizeTrigger
>;
export type FloatingPanelStageTriggerProps = ComponentProps<
	typeof FloatingPanelStageTrigger
>;
export type FloatingPanelContextProps = ComponentProps<
	typeof FloatingPanelContext
>;

export const FloatingPanel = Object.assign(FloatingPanelRoot, {
	Trigger: FloatingPanelTrigger,
	Positioner: FloatingPanelPositioner,
	Content: FloatingPanelContent,
	Header: FloatingPanelHeader,
	Root: FloatingPanelRoot,
	RootProvider: FloatingPanelRootProvider,
	Body: FloatingPanelBody,
	Title: FloatingPanelTitle,
	Control: FloatingPanelControl,
	CloseTrigger: FloatingPanelCloseTrigger,
	DragTrigger: FloatingPanelDragTrigger,
	ResizeTrigger: FloatingPanelResizeTrigger,
	StageTrigger: FloatingPanelStageTrigger,
	Context: FloatingPanelContext,
});

export type FloatingPanel = {
	RootProviderProps: FloatingPanelRootProviderProps;
	RootProps: FloatingPanelRootProps;
	TriggerProps: FloatingPanelTriggerProps;
	PositionerProps: FloatingPanelPositionerProps;
	ContentProps: FloatingPanelContentProps;
	HeaderProps: FloatingPanelHeaderProps;
	BodyProps: FloatingPanelBodyProps;
	TitleProps: FloatingPanelTitleProps;
	ControlProps: FloatingPanelControlProps;
	CloseTriggerProps: FloatingPanelCloseTriggerProps;
	DragTriggerProps: FloatingPanelDragTriggerProps;
	ResizeTriggerProps: FloatingPanelResizeTriggerProps;
	StageTriggerProps: FloatingPanelStageTriggerProps;
	ContextProps: FloatingPanelContextProps;
	Props: FloatingPanelRootProps;
};

export type {
	FloatingPanelOpenChangeDetails,
	FloatingPanelPositionChangeDetails,
	FloatingPanelSizeChangeDetails,
	FloatingPanelStageChangeDetails,
	UseFloatingPanelContext,
	UseFloatingPanelProps,
	UseFloatingPanelReturn,
} from "@ark-ui/react/floating-panel";

export {
	useFloatingPanel,
	useFloatingPanelContext,
} from "@ark-ui/react/floating-panel";

export {
	FloatingPanelBody,
	FloatingPanelCloseTrigger,
	FloatingPanelContent,
	FloatingPanelContext,
	FloatingPanelControl,
	FloatingPanelDragTrigger,
	FloatingPanelHeader,
	FloatingPanelPositioner,
	FloatingPanelResizeTrigger,
	FloatingPanelRoot,
	FloatingPanelRootProvider,
	FloatingPanelStageTrigger,
	FloatingPanelTitle,
	FloatingPanelTrigger,
};
