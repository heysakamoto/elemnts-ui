import type { ComponentProps } from "react";
import {
	AlertContent,
	AlertControl,
	AlertDescription,
	AlertIndicator,
	AlertRoot,
	AlertTitle,
} from "./alert";

export type AlertRootProps = ComponentProps<typeof AlertRoot>;
export type AlertContentProps = ComponentProps<typeof AlertContent>;
export type AlertControlProps = ComponentProps<typeof AlertControl>;
export type AlertDescriptionProps = ComponentProps<typeof AlertDescription>;
export type AlertIndicatorProps = ComponentProps<typeof AlertIndicator>;
export type AlertTitleProps = ComponentProps<typeof AlertTitle>;

export const Alert = Object.assign(AlertRoot, {
	Root: AlertRoot,
	Content: AlertContent,
	Control: AlertControl,
	Description: AlertDescription,
	Indicator: AlertIndicator,
	Title: AlertTitle,
});

export type Alert = {
	RootProps: AlertRootProps;
	ContentProps: AlertContentProps;
	ControlProps: AlertControlProps;
	DescriptionProps: AlertDescriptionProps;
	IndicatorProps: AlertIndicatorProps;
	TitleProps: AlertTitleProps;
	Props: AlertRootProps;
};

export type {
	UseCollapsibleContext as UseAlertContext,
	UseCollapsibleProps as UseAlertProps,
	UseCollapsibleReturn as UseAlertReturn,
} from "@ark-ui/react/collapsible";

export {
	useCollapsible as useAlert,
	useCollapsibleContext as useAlertContext,
} from "@ark-ui/react/collapsible";

export {
	AlertContent,
	AlertControl,
	AlertDescription,
	AlertIndicator,
	AlertRoot,
	AlertTitle,
};
