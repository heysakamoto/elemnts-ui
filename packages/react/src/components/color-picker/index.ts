import type { ComponentProps } from "react";
import {
	ColorPickerArea,
	ColorPickerAreaBackground,
	ColorPickerAreaThumb,
	ColorPickerChannelInput,
	ColorPickerChannelSlider,
	ColorPickerChannelSliderControl,
	ColorPickerChannelSliderLabel,
	ColorPickerChannelSliderThumb,
	ColorPickerChannelSliderTrack,
	ColorPickerChannelSliderValueText,
	ColorPickerContent,
	ColorPickerContext,
	ColorPickerControl,
	ColorPickerEyeDropperTrigger,
	ColorPickerFormatSelect,
	ColorPickerFormatTrigger,
	ColorPickerHiddenInput,
	ColorPickerLabel,
	ColorPickerPositioner,
	ColorPickerRoot,
	ColorPickerRootProvider,
	ColorPickerSwatch,
	ColorPickerSwatchGroup,
	ColorPickerSwatchIndicator,
	ColorPickerSwatchTrigger,
	ColorPickerTransparencyGrid,
	ColorPickerTrigger,
	ColorPickerValueSwatch,
	ColorPickerValueText,
	ColorPickerView,
} from "./color-picker";

export type ColorPickerRootProviderProps = ComponentProps<
	typeof ColorPickerRootProvider
>;
export type ColorPickerRootProps = ComponentProps<typeof ColorPickerRoot>;
export type ColorPickerAreaProps = ComponentProps<typeof ColorPickerArea>;
export type ColorPickerAreaBackgroundProps = ComponentProps<
	typeof ColorPickerAreaBackground
>;
export type ColorPickerAreaThumbProps = ComponentProps<
	typeof ColorPickerAreaThumb
>;
export type ColorPickerChannelSliderProps = ComponentProps<
	typeof ColorPickerChannelSlider
>;
export type ColorPickerChannelSliderControlProps = ComponentProps<
	typeof ColorPickerChannelSliderControl
>;
export type ColorPickerChannelSliderLabelProps = ComponentProps<
	typeof ColorPickerChannelSliderLabel
>;
export type ColorPickerChannelSliderThumbProps = ComponentProps<
	typeof ColorPickerChannelSliderThumb
>;
export type ColorPickerChannelSliderTrackProps = ComponentProps<
	typeof ColorPickerChannelSliderTrack
>;
export type ColorPickerChannelSliderValueTextProps = ComponentProps<
	typeof ColorPickerChannelSliderValueText
>;
export type ColorPickerChannelInputProps = ComponentProps<
	typeof ColorPickerChannelInput
>;
export type ColorPickerContentProps = ComponentProps<typeof ColorPickerContent>;
export type ColorPickerValueSwatchProps = ComponentProps<
	typeof ColorPickerValueSwatch
>;
export type ColorPickerContextProps = ComponentProps<typeof ColorPickerContext>;
export type ColorPickerControlProps = ComponentProps<typeof ColorPickerControl>;
export type ColorPickerEyeDropperTriggerProps = ComponentProps<
	typeof ColorPickerEyeDropperTrigger
>;
export type ColorPickerFormatSelectProps = ComponentProps<
	typeof ColorPickerFormatSelect
>;
export type ColorPickerFormatTriggerProps = ComponentProps<
	typeof ColorPickerFormatTrigger
>;
export type ColorPickerHiddenInputProps = ComponentProps<
	typeof ColorPickerHiddenInput
>;
export type ColorPickerLabelProps = ComponentProps<typeof ColorPickerLabel>;
export type ColorPickerPositionerProps = ComponentProps<
	typeof ColorPickerPositioner
>;
export type ColorPickerSwatchProps = ComponentProps<typeof ColorPickerSwatch>;
export type ColorPickerSwatchGroupProps = ComponentProps<
	typeof ColorPickerSwatchGroup
>;
export type ColorPickerSwatchIndicatorProps = ComponentProps<
	typeof ColorPickerSwatchIndicator
>;
export type ColorPickerSwatchTriggerProps = ComponentProps<
	typeof ColorPickerSwatchTrigger
>;
export type ColorPickerTransparencyGridProps = ComponentProps<
	typeof ColorPickerTransparencyGrid
>;
export type ColorPickerTriggerProps = ComponentProps<typeof ColorPickerTrigger>;
export type ColorPickerValueTextProps = ComponentProps<
	typeof ColorPickerValueText
>;
export type ColorPickerViewProps = ComponentProps<typeof ColorPickerView>;

export const ColorPicker = Object.assign(ColorPickerRoot, {
	RootProvider: ColorPickerRootProvider,
	Root: ColorPickerRoot,
	Area: ColorPickerArea,
	AreaBackground: ColorPickerAreaBackground,
	AreaThumb: ColorPickerAreaThumb,
	ChannelSlider: ColorPickerChannelSlider,
	ChannelSliderControl: ColorPickerChannelSliderControl,
	ChannelSliderLabel: ColorPickerChannelSliderLabel,
	ChannelSliderThumb: ColorPickerChannelSliderThumb,
	ChannelSliderTrack: ColorPickerChannelSliderTrack,
	ChannelSliderValueText: ColorPickerChannelSliderValueText,
	ChannelInput: ColorPickerChannelInput,
	Content: ColorPickerContent,
	ValueSwatch: ColorPickerValueSwatch,
	Context: ColorPickerContext,
	Control: ColorPickerControl,
	EyeDropperTrigger: ColorPickerEyeDropperTrigger,
	FormatSelect: ColorPickerFormatSelect,
	FormatTrigger: ColorPickerFormatTrigger,
	HiddenInput: ColorPickerHiddenInput,
	Label: ColorPickerLabel,
	Positioner: ColorPickerPositioner,
	Swatch: ColorPickerSwatch,
	SwatchGroup: ColorPickerSwatchGroup,
	SwatchIndicator: ColorPickerSwatchIndicator,
	SwatchTrigger: ColorPickerSwatchTrigger,
	TransparencyGrid: ColorPickerTransparencyGrid,
	Trigger: ColorPickerTrigger,
	ValueText: ColorPickerValueText,
	View: ColorPickerView,
});

export type ColorPicker = {
	Props: ColorPickerRootProps;
	RootProviderProps: ColorPickerRootProviderProps;
	RootProps: ColorPickerRootProps;
	AreaProps: ColorPickerAreaProps;
	AreaBackgroundProps: ColorPickerAreaBackgroundProps;
	AreaThumbProps: ColorPickerAreaThumbProps;
	ChannelSliderProps: ColorPickerChannelSliderProps;
	ChannelSliderControlProps: ColorPickerChannelSliderControlProps;
	ChannelSliderLabelProps: ColorPickerChannelSliderLabelProps;
	ChannelSliderThumbProps: ColorPickerChannelSliderThumbProps;
	ChannelSliderTrackProps: ColorPickerChannelSliderTrackProps;
	ChannelSliderValueTextProps: ColorPickerChannelSliderValueTextProps;
	ChannelInputProps: ColorPickerChannelInputProps;
	ContentProps: ColorPickerContentProps;
	ValueSwatchProps: ColorPickerValueSwatchProps;
	ContextProps: ColorPickerContextProps;
	ControlProps: ColorPickerControlProps;
	EyeDropperTriggerProps: ColorPickerEyeDropperTriggerProps;
	FormatSelectProps: ColorPickerFormatSelectProps;
	FormatTriggerProps: ColorPickerFormatTriggerProps;
	HiddenInputProps: ColorPickerHiddenInputProps;
	LabelProps: ColorPickerLabelProps;
	PositionerProps: ColorPickerPositionerProps;
	SwatchProps: ColorPickerSwatchProps;
	SwatchGroupProps: ColorPickerSwatchGroupProps;
	SwatchIndicatorProps: ColorPickerSwatchIndicatorProps;
	SwatchTriggerProps: ColorPickerSwatchTriggerProps;
	TransparencyGridProps: ColorPickerTransparencyGridProps;
	TriggerProps: ColorPickerTriggerProps;
	ValueTextProps: ColorPickerValueTextProps;
	ViewProps: ColorPickerViewProps;
};

export type {
	ColorPickerFormatChangeDetails,
	ColorPickerInteractOutsideEvent,
	ColorPickerOpenChangeDetails,
	ColorPickerValueChangeDetails,
	UseColorPickerContext,
	UseColorPickerProps,
	UseColorPickerReturn,
} from "@ark-ui/react/color-picker";

export {
	parseColor,
	useColorPicker,
	useColorPickerContext,
} from "@ark-ui/react/color-picker";

export {
	ColorPickerArea,
	ColorPickerAreaBackground,
	ColorPickerAreaThumb,
	ColorPickerChannelInput,
	ColorPickerChannelSlider,
	ColorPickerChannelSliderControl,
	ColorPickerChannelSliderLabel,
	ColorPickerChannelSliderThumb,
	ColorPickerChannelSliderTrack,
	ColorPickerChannelSliderValueText,
	ColorPickerContent,
	ColorPickerContext,
	ColorPickerControl,
	ColorPickerEyeDropperTrigger,
	ColorPickerFormatSelect,
	ColorPickerFormatTrigger,
	ColorPickerHiddenInput,
	ColorPickerLabel,
	ColorPickerPositioner,
	ColorPickerRoot,
	ColorPickerRootProvider,
	ColorPickerSwatch,
	ColorPickerSwatchGroup,
	ColorPickerSwatchIndicator,
	ColorPickerSwatchTrigger,
	ColorPickerTransparencyGrid,
	ColorPickerTrigger,
	ColorPickerValueSwatch,
	ColorPickerValueText,
	ColorPickerView,
};
