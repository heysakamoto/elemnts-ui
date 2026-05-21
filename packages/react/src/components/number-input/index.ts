import type { ComponentProps } from "react";
import {
	NumberInputContext,
	NumberInputControl,
	NumberInputDecrementTrigger,
	NumberInputIncrementTrigger,
	NumberInputInput,
	NumberInputLabel,
	NumberInputRoot,
	NumberInputRootProvider,
	NumberInputScrubber,
	NumberInputValueText,
} from "./number-input";

export type NumberInputRootProviderProps = ComponentProps<
	typeof NumberInputRootProvider
>;
export type NumberInputRootProps = ComponentProps<typeof NumberInputRoot>;
export type NumberInputContextProps = ComponentProps<typeof NumberInputContext>;
export type NumberInputControlProps = ComponentProps<typeof NumberInputControl>;
export type NumberInputDecrementTriggerProps = ComponentProps<
	typeof NumberInputDecrementTrigger
>;
export type NumberInputIncrementTriggerProps = ComponentProps<
	typeof NumberInputIncrementTrigger
>;
export type NumberInputInputProps = ComponentProps<typeof NumberInputInput>;
export type NumberInputLabelProps = ComponentProps<typeof NumberInputLabel>;
export type NumberInputScrubberProps = ComponentProps<
	typeof NumberInputScrubber
>;
export type NumberInputValueTextProps = ComponentProps<
	typeof NumberInputValueText
>;

export const NumberInput = Object.assign(NumberInputRoot, {
	RootProvider: NumberInputRootProvider,
	Root: NumberInputRoot,
	Context: NumberInputContext,
	Control: NumberInputControl,
	DecrementTrigger: NumberInputDecrementTrigger,
	IncrementTrigger: NumberInputIncrementTrigger,
	Input: NumberInputInput,
	Label: NumberInputLabel,
	Scrubber: NumberInputScrubber,
	ValueText: NumberInputValueText,
});

export type NumberInput = {
	RootProviderProps: NumberInputRootProviderProps;
	RootProps: NumberInputRootProps;
	ContextProps: NumberInputContextProps;
	ControlProps: NumberInputControlProps;
	DecrementTriggerProps: NumberInputDecrementTriggerProps;
	IncrementTriggerProps: NumberInputIncrementTriggerProps;
	InputProps: NumberInputInputProps;
	LabelProps: NumberInputLabelProps;
	ScrubberProps: NumberInputScrubberProps;
	ValueTextProps: NumberInputValueTextProps;
	Props: NumberInputRootProps;
};

export type {
	NumberInputFocusChangeDetails,
	NumberInputValueChangeDetails,
	NumberInputValueInvalidDetails,
	UseNumberInputContext,
	UseNumberInputProps,
	UseNumberInputReturn,
} from "@ark-ui/react/number-input";

export {
	useNumberInput,
	useNumberInputContext,
} from "@ark-ui/react/number-input";

export {
	NumberInputRootProvider,
	NumberInputRoot,
	NumberInputContext,
	NumberInputControl,
	NumberInputDecrementTrigger,
	NumberInputIncrementTrigger,
	NumberInputInput,
	NumberInputLabel,
	NumberInputScrubber,
	NumberInputValueText,
};
