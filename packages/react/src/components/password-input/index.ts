import type { ComponentProps } from "react";
import {
	PasswordInputContext,
	PasswordInputControl,
	PasswordInputIndicator,
	PasswordInputInput,
	PasswordInputLabel,
	PasswordInputRoot,
	PasswordInputRootProvider,
	PasswordInputVisibilityTrigger,
} from "./password-input";

export type PasswordInputRootProviderProps = ComponentProps<
	typeof PasswordInputRootProvider
>;
export type PasswordInputRootProps = ComponentProps<typeof PasswordInputRoot>;
export type PasswordInputContextProps = ComponentProps<
	typeof PasswordInputContext
>;
export type PasswordInputControlProps = ComponentProps<
	typeof PasswordInputControl
>;
export type PasswordInputIndicatorProps = ComponentProps<
	typeof PasswordInputIndicator
>;
export type PasswordInputInputProps = ComponentProps<typeof PasswordInputInput>;
export type PasswordInputLabelProps = ComponentProps<typeof PasswordInputLabel>;
export type PasswordInputVisibilityTriggerProps = ComponentProps<
	typeof PasswordInputVisibilityTrigger
>;

export const PasswordInput = Object.assign(PasswordInputRoot, {
	Context: PasswordInputContext,
	Control: PasswordInputControl,
	Indicator: PasswordInputIndicator,
	Input: PasswordInputInput,
	Label: PasswordInputLabel,
	Root: PasswordInputRoot,
	RootProvider: PasswordInputRootProvider,
	VisibilityTrigger: PasswordInputVisibilityTrigger,
});

export type PasswordInput = {
	Props: PasswordInputRootProps;
	RootProviderProps: PasswordInputRootProviderProps;
	VisibilityTriggerProps: PasswordInputVisibilityTriggerProps;
	LabelProps: PasswordInputLabelProps;
	InputProps: PasswordInputInputProps;
	IndicatorProps: PasswordInputIndicatorProps;
	ControlProps: PasswordInputControlProps;
	ContextProps: PasswordInputContextProps;
	RootProps: PasswordInputRootProps;
};

export type {
	PasswordInputVisibilityChangeDetails,
	UsePasswordInputContext,
	UsePasswordInputProps,
	UsePasswordInputReturn,
} from "@ark-ui/react/password-input";

export {
	usePasswordInput,
	usePasswordInputContext,
} from "@ark-ui/react/password-input";

export {
	PasswordInputContext,
	PasswordInputControl,
	PasswordInputIndicator,
	PasswordInputInput,
	PasswordInputLabel,
	PasswordInputRoot,
	PasswordInputRootProvider,
	PasswordInputVisibilityTrigger,
};
