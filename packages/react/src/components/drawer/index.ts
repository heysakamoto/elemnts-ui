import type { ComponentProps } from "react";

import {
	DrawerBackdrop,
	DrawerCloseTrigger,
	DrawerContent,
	DrawerContext,
	DrawerDescription,
	DrawerGrabber,
	DrawerGrabberIndicator,
	DrawerIndent,
	DrawerIndentBackground,
	DrawerPositioner,
	DrawerRoot,
	DrawerRootProvider,
	DrawerStack,
	DrawerSwipeArea,
	DrawerTitle,
	DrawerTrigger,
} from "./drawer";

export type DrawerRootProviderProps = ComponentProps<typeof DrawerRootProvider>;
export type DrawerRootProps = ComponentProps<typeof DrawerRoot>;
export type DrawerContextProps = ComponentProps<typeof DrawerContext>;
export type DrawerTriggerProps = ComponentProps<typeof DrawerTrigger>;
export type DrawerContentProps = ComponentProps<typeof DrawerContent>;
export type DrawerTitleProps = ComponentProps<typeof DrawerTitle>;
export type DrawerDescriptionProps = ComponentProps<typeof DrawerDescription>;
export type DrawerBackdropProps = ComponentProps<typeof DrawerBackdrop>;
export type DrawerPositionerProps = ComponentProps<typeof DrawerPositioner>;
export type DrawerCloseTriggerProps = ComponentProps<typeof DrawerCloseTrigger>;
export type DrawerGrabberProps = ComponentProps<typeof DrawerGrabber>;
export type DrawerGrabberIndicatorProps = ComponentProps<
	typeof DrawerGrabberIndicator
>;
export type DrawerIndentProps = ComponentProps<typeof DrawerIndent>;
export type DrawerIndentBackgroundProps = ComponentProps<
	typeof DrawerIndentBackground
>;
export type DrawerStackProps = ComponentProps<typeof DrawerStack>;
export type DrawerSwipeAreaProps = ComponentProps<typeof DrawerSwipeArea>;

export const Drawer = Object.assign(DrawerRoot, {
	RootProvider: DrawerRootProvider,
	Root: DrawerRoot,
	Trigger: DrawerTrigger,
	Content: DrawerContent,
	Title: DrawerTitle,
	Description: DrawerDescription,
	Backdrop: DrawerBackdrop,
	Positioner: DrawerPositioner,
	CloseTrigger: DrawerCloseTrigger,
	Grabber: DrawerGrabber,
	GrabberIndicator: DrawerGrabberIndicator,
	Indent: DrawerIndent,
	IndentBackground: DrawerIndentBackground,
	Stack: DrawerStack,
	SwipeArea: DrawerSwipeArea,
	Context: DrawerContext,
});

export type Drawer = {
	Props: DrawerRootProps;
	RootProps: DrawerRootProps;
	RootProviderProps: DrawerRootProviderProps;
	TriggerProps: DrawerTriggerProps;
	ContentProps: DrawerContentProps;
	TitleProps: DrawerTitleProps;
	DescriptionProps: DrawerDescriptionProps;
	BackdropProps: DrawerBackdropProps;
	PositionerProps: DrawerPositionerProps;
	CloseTriggerProps: DrawerCloseTriggerProps;
	GrabberProps: DrawerGrabberProps;
	GrabberIndicatorProps: DrawerGrabberIndicatorProps;
	IndentProps: DrawerIndentProps;
	IndentBackgroundProps: DrawerIndentBackgroundProps;
	StackProps: DrawerStackProps;
	SwipeAreaProps: DrawerSwipeAreaProps;
	ContextProps: DrawerContextProps;
};

export {
	type UseDrawerContext,
	type UseDrawerProps,
	type UseDrawerReturn,
	type UseDrawerStackContext,
	useDrawer,
	useDrawerContext,
	useDrawerStackContext,
} from "@ark-ui/react/drawer";

export {
	type DrawerBackdrop,
	type DrawerCloseTrigger,
	type DrawerContent,
	type DrawerContext,
	type DrawerDescription,
	type DrawerGrabber,
	type DrawerGrabberIndicator,
	type DrawerIndent,
	type DrawerIndentBackground,
	type DrawerPositioner,
	type DrawerRoot,
	type DrawerRootProvider,
	DrawerStack,
	DrawerSwipeArea,
	type DrawerTitle,
	type DrawerTrigger,
};
