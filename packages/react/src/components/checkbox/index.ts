import type { ComponentProps } from "react";

import {
	CheckboxContext,
	CheckboxControl,
	CheckboxGroup,
	CheckboxGroupProvider,
	CheckboxHiddenInput,
	CheckboxIndicator,
	CheckboxLabel,
	CheckboxRoot,
	CheckboxRootProvider,
} from "./checkbox";

export type CheckboxRootProviderProps = ComponentProps<
	typeof CheckboxRootProvider
>;
export type CheckboxGroupProps = ComponentProps<typeof CheckboxGroup>;
export type CheckboxRootProps = ComponentProps<typeof CheckboxRoot>;
export type CheckboxLabelProps = ComponentProps<typeof CheckboxLabel>;
export type CheckboxControlProps = ComponentProps<typeof CheckboxControl>;
export type CheckboxIndicatorProps = ComponentProps<typeof CheckboxIndicator>;
export type CheckboxHiddenInputProps = ComponentProps<
	typeof CheckboxHiddenInput
>;
export type CheckboxContextProps = ComponentProps<typeof CheckboxContext>;
export type CheckboxGroupProviderProps = ComponentProps<
	typeof CheckboxGroupProvider
>;

export const Checkbox = Object.assign(CheckboxRoot, {
	Group: CheckboxGroup,
	Root: CheckboxRoot,
	Label: CheckboxLabel,
	Control: CheckboxControl,
	RootProvider: CheckboxRootProvider,
	GroupProvider: CheckboxGroupProvider,
	Indicator: CheckboxIndicator,
	HiddenInput: CheckboxHiddenInput,
	Context: CheckboxContext,
});

export type Checkbox = {
	RootProps: CheckboxRootProps;
	ControlProps: CheckboxControlProps;
	IndicatorProps: CheckboxIndicatorProps;
	ContextProps: CheckboxContextProps;
	GroupProviderProps: CheckboxGroupProviderProps;
	LabelProps: CheckboxLabelProps;
	HiddenInputProps: CheckboxHiddenInputProps;
	RootProviderProps: CheckboxRootProviderProps;
};

export type {
	UseCheckboxContext,
	UseCheckboxGroupContext,
	UseCheckboxGroupProps,
	UseCheckboxGroupReturn,
	UseCheckboxProps,
	UseCheckboxReturn,
} from "@ark-ui/react/checkbox";
export {
	useCheckbox,
	useCheckboxContext,
	useCheckboxGroup,
	useCheckboxGroupContext,
} from "@ark-ui/react/checkbox";

export {
	CheckboxContext,
	CheckboxControl,
	CheckboxGroup,
	CheckboxGroupProvider,
	CheckboxHiddenInput,
	CheckboxIndicator,
	CheckboxLabel,
	CheckboxRoot,
	CheckboxRootProvider,
};
