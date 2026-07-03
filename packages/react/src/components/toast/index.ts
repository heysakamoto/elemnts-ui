import type { ComponentProps } from "react";

import {
	ToastActionTrigger,
	ToastCloseTrigger,
	ToastContext,
	ToastControl,
	ToastDescription,
	Toaster,
	ToastGroup,
	ToastIndicator,
	ToastRoot,
	ToastTitle,
} from "./toast";

export type ToastProps = ComponentProps<typeof Toaster>;
export type ToastActionTriggerProps = ComponentProps<typeof ToastActionTrigger>;
export type ToastCloseTriggerProps = ComponentProps<typeof ToastCloseTrigger>;
export type ToastContextProps = ComponentProps<typeof ToastContext>;
export type ToastControlProps = ComponentProps<typeof ToastControl>;
export type ToastDescriptionProps = ComponentProps<typeof ToastDescription>;
export type ToastGroupProps = ComponentProps<typeof ToastGroup>;
export type ToastIndicatorProps = ComponentProps<typeof ToastIndicator>;
export type ToastRootProps = ComponentProps<typeof ToastRoot>;
export type ToastTitleProps = ComponentProps<typeof ToastTitle>;
export type ToasterProps = ComponentProps<typeof Toaster>;

export const Toast = Object.assign(ToastRoot, {
	ActionTrigger: ToastActionTrigger,
	CloseTrigger: ToastCloseTrigger,
	Context: ToastContext,
	Control: ToastControl,
	Description: ToastDescription,
	Group: ToastGroup,
	Indicator: ToastIndicator,
	Root: ToastRoot,
	Title: ToastTitle,
});

export type Toast = {
	Props: ToastRootProps;
	RootProps: ToastRootProps;
	ActionTriggerProps: ToastActionTriggerProps;
	CloseTriggerProps: ToastCloseTriggerProps;
	ContextProps: ToastContextProps;
	ControlProps: ToastControlProps;
	DescriptionProps: ToastDescriptionProps;
	GroupProps: ToastGroupProps;
	IndicatorProps: ToastIndicatorProps;
	TitleProps: ToastTitleProps;
};

export type {
	CreateToasterProps,
	CreateToasterReturn,
	ToastStatusChangeDetails,
	UseToastContext,
} from "@ark-ui/react/toast";
export { createToaster, useToastContext } from "@ark-ui/react/toast";

export {
	ToastActionTrigger,
	ToastCloseTrigger,
	ToastContext,
	ToastControl,
	ToastDescription,
	Toaster,
	ToastGroup,
	ToastIndicator,
	ToastRoot,
	ToastTitle,
};
