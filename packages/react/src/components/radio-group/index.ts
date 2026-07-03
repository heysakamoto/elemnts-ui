import type { ComponentProps } from "react";

import {
	RadioGroupContext,
	RadioGroupIndicator,
	RadioGroupItem,
	RadioGroupItemContext,
	RadioGroupItemControl,
	RadioGroupItemHiddenInput,
	RadioGroupItemText,
	RadioGroupLabel,
	RadioGroupRoot,
	RadioGroupRootProvider,
} from "./radio-group";

export type RadioGroupRootProviderProps = ComponentProps<
	typeof RadioGroupRootProvider
>;
export type RadioGroupRootProps = ComponentProps<typeof RadioGroupRoot>;
export type RadioGroupContextProps = ComponentProps<typeof RadioGroupContext>;
export type RadioGroupIndicatorProps = ComponentProps<
	typeof RadioGroupIndicator
>;
export type RadioGroupItemProps = ComponentProps<typeof RadioGroupItem>;
export type RadioGroupItemControlProps = ComponentProps<
	typeof RadioGroupItemControl
>;
export type RadioGroupItemHiddenInputProps = ComponentProps<
	typeof RadioGroupItemHiddenInput
>;
export type RadioGroupItemTextProps = ComponentProps<typeof RadioGroupItemText>;
export type RadioGroupItemContextProps = ComponentProps<
	typeof RadioGroupItemContext
>;
export type RadioGroupLabelProps = ComponentProps<typeof RadioGroupLabel>;

export const RadioGroup = Object.assign(RadioGroupRoot, {
	Context: RadioGroupContext,
	Indicator: RadioGroupIndicator,
	Item: RadioGroupItem,
	ItemControl: RadioGroupItemControl,
	ItemHiddenInput: RadioGroupItemHiddenInput,
	ItemText: RadioGroupItemText,
	ItemContext: RadioGroupItemContext,
	Label: RadioGroupLabel,
	Root: RadioGroupRoot,
	RootProvider: RadioGroupRootProvider,
});

export type RadioGroup = {
	RootProviderProps: RadioGroupRootProviderProps;
	Props: RadioGroupRootProps;
	RootProps: RadioGroupRootProps;
	ContextProps: RadioGroupContextProps;
	IndicatorProps: RadioGroupIndicatorProps;
	ItemProps: RadioGroupItemProps;
	ItemControlProps: RadioGroupItemControlProps;
	ItemHiddenInputProps: RadioGroupItemHiddenInputProps;
	ItemTextProps: RadioGroupItemTextProps;
	ItemContextProps: RadioGroupItemContextProps;
	LabelProps: RadioGroupLabelProps;
};

export type {
	RadioGroupValueChangeDetails,
	UseRadioGroupContext,
	UseRadioGroupItemContext,
	UseRadioGroupProps,
	UseRadioGroupReturn,
} from "@ark-ui/react/radio-group";
export {
	useRadioGroup,
	useRadioGroupContext,
	useRadioGroupItemContext,
} from "@ark-ui/react/radio-group";

export {
	RadioGroupContext,
	RadioGroupIndicator,
	RadioGroupItem,
	RadioGroupItemControl,
	RadioGroupItemHiddenInput,
	RadioGroupItemText,
	RadioGroupLabel,
	RadioGroupRoot,
	RadioGroupRootProvider,
};
