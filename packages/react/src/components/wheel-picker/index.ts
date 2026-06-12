import type { ComponentProps } from "react";
import {
	WheelPickerControl,
	WheelPickerOptions,
	WheelPickerRoot,
} from "./wheel-picker";

export type WheelPickerRootProps = ComponentProps<typeof WheelPickerRoot>;
export type WheelPickerOptionProps = ComponentProps<typeof WheelPickerOptions>;
export type WheelPickerControlProps = ComponentProps<typeof WheelPickerControl>;

export const WheelPicker = Object.assign(WheelPickerRoot, {
	Root: WheelPickerRoot,
	Options: WheelPickerOptions,
	Control: WheelPickerControl,
});

export type WheelPicker = {
	Props: WheelPickerRootProps;
	RootProps: WheelPickerRootProps;
	OptionProps: WheelPickerOptionProps;
	ControlProps: WheelPickerControlProps;
};

export type { WheelPickerOption } from "@ncdai/react-wheel-picker";

export { WheelPickerControl, WheelPickerOptions, WheelPickerRoot };
