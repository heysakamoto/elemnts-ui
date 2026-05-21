import type { ComponentProps } from "react";
import {
	AlertContext,
	AlertControl,
	AlertDescription,
	AlertIndicator,
	AlertMedia,
	AlertRoot,
	AlertRootProvider,
	AlertTitle,
	AlertTrigger,
} from "./alert";

export type AlertRootProviderProps = ComponentProps<typeof AlertRootProvider>;
export type AlertRootProps = ComponentProps<typeof AlertRoot>;
export type AlertControlProps = ComponentProps<typeof AlertControl>;
export type AlertDescriptionProps = ComponentProps<typeof AlertDescription>;
export type AlertIndicatorProps = ComponentProps<typeof AlertIndicator>;
export type AlertMediaProps = ComponentProps<typeof AlertMedia>;
export type AlertTitleProps = ComponentProps<typeof AlertTitle>;
export type AlertTriggerProps = ComponentProps<typeof AlertTrigger>;
export type AlertContextProps = ComponentProps<typeof AlertContext>;

export const Alert = Object.assign(AlertRoot, {
	RootProvider: AlertRootProvider,
	Root: AlertRoot,
	Control: AlertControl,
	Description: AlertDescription,
	Indicator: AlertIndicator,
	Media: AlertMedia,
	Title: AlertTitle,
	Trigger: AlertTrigger,
	Context: AlertContext,
});

export type Alert = {
	RootProviderProps: AlertRootProviderProps;
	RootProps: AlertRootProps;
	ControlProps: AlertControlProps;
	DescriptionProps: AlertDescriptionProps;
	IndicatorProps: AlertIndicatorProps;
	MediaProps: AlertMediaProps;
	TitleProps: AlertTitleProps;
	TriggerProps: AlertTriggerProps;
	ContextProps: AlertContextProps;
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
	AlertContext,
	AlertControl,
	AlertDescription,
	AlertIndicator,
	AlertMedia,
	AlertRoot,
	AlertRootProvider,
	AlertTitle,
	AlertTrigger,
};
