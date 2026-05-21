import type { ComponentProps } from "react";
import {
	SwitchContext,
	SwitchControl,
	SwitchHiddenInput,
	SwitchLabel,
	SwitchRoot,
	SwitchRootProvider,
	SwitchThumb,
} from "./switch";

export type SwitchContextProps = ComponentProps<typeof SwitchContext>;
export type SwitchControlProps = ComponentProps<typeof SwitchControl>;
export type SwitchHiddenInputProps = ComponentProps<typeof SwitchHiddenInput>;
export type SwitchLabelProps = ComponentProps<typeof SwitchLabel>;
export type SwitchRootProps = ComponentProps<typeof SwitchRoot>;
export type SwitchRootProviderProps = ComponentProps<typeof SwitchRootProvider>;
export type SwitchThumbProps = ComponentProps<typeof SwitchThumb>;

export const Switch = Object.assign(SwitchRoot, {
	Context: SwitchContext,
	Control: SwitchControl,
	HiddenInput: SwitchHiddenInput,
	Label: SwitchLabel,
	Root: SwitchRoot,
	RootProvider: SwitchRootProvider,
	Thumb: SwitchThumb,
});

export type Switch = {
	Props: SwitchRootProps;
	ContextProps: SwitchContextProps;
	ControlProps: SwitchControlProps;
	HiddenInputProps: SwitchHiddenInputProps;
	LabelProps: SwitchLabelProps;
	ThumbProps: SwitchThumbProps;
	RootProps: SwitchRootProps;
	RootProviderProps: SwitchRootProviderProps;
};

export type {
	SwitchCheckedChangeDetails,
	UseSwitchContext,
	UseSwitchProps,
	UseSwitchReturn,
} from "@ark-ui/react/switch";

export { useSwitch, useSwitchContext } from "@ark-ui/react/switch";

export {
	SwitchContext,
	SwitchControl,
	SwitchHiddenInput,
	SwitchLabel,
	SwitchRoot,
	SwitchRootProvider,
	SwitchThumb,
};
