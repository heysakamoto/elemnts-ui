import type { ComponentProps } from "react";
import {
	PinInputContext,
	PinInputControl,
	PinInputHiddenInput,
	PinInputInput,
	PinInputLabel,
	PinInputRoot,
	PinInputRootProvider,
} from "./pin-input";

export type PinInputRootProviderProps = ComponentProps<
	typeof PinInputRootProvider
>;
export type PinInputRootProps = ComponentProps<typeof PinInputRoot>;
export type PinInputContextProps = ComponentProps<typeof PinInputContext>;
export type PinInputControlProps = ComponentProps<typeof PinInputControl>;
export type PinInputHiddenInputProps = ComponentProps<
	typeof PinInputHiddenInput
>;
export type PinInputInputProps = ComponentProps<typeof PinInputInput>;
export type PinInputLabelProps = ComponentProps<typeof PinInputLabel>;

export const PinInput = Object.assign(PinInputRoot, {
	RootProvider: PinInputRootProvider,
	Context: PinInputContext,
	Control: PinInputControl,
	HiddenInput: PinInputHiddenInput,
	Input: PinInputInput,
	Label: PinInputLabel,
	Root: PinInputRoot,
});

export type PinInput = {
	RootProviderProps: PinInputRootProviderProps;
	RootProps: PinInputRootProps;
	ContextProps: PinInputContextProps;
	ControlProps: PinInputControlProps;
	HiddenInputProps: PinInputHiddenInputProps;
	InputProps: PinInputInputProps;
	LabelProps: PinInputLabelProps;
	Props: PinInputRootProps;
};

export type {
	PinInputValueChangeDetails,
	PinInputValueInvalidDetails,
	UsePinInputContext,
	UsePinInputProps,
	UsePinInputReturn,
} from "@ark-ui/react/pin-input";

export { usePinInput, usePinInputContext } from "@ark-ui/react/pin-input";

export {
	PinInputContext,
	PinInputControl,
	PinInputHiddenInput,
	PinInputInput,
	PinInputLabel,
	PinInputRoot,
	PinInputRootProvider,
};
