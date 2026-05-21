import type { ComponentProps } from "react";
import {
	SliderContext,
	SliderControl,
	SliderHiddenInput,
	SliderLabel,
	SliderMarker,
	SliderMarkerGroup,
	SliderRange,
	SliderRoot,
	SliderRootProvider,
	SliderStep,
	SliderStepGroup,
	SliderThumb,
	SliderTrack,
	SliderValueText,
} from "./slider";

export type SliderContextProps = ComponentProps<typeof SliderContext>;
export type SliderControlProps = ComponentProps<typeof SliderControl>;
export type SliderHiddenInputProps = ComponentProps<typeof SliderHiddenInput>;
export type SliderLabelProps = ComponentProps<typeof SliderLabel>;
export type SliderMarkerProps = ComponentProps<typeof SliderMarker>;
export type SliderMarkerGroupProps = ComponentProps<typeof SliderMarkerGroup>;
export type SliderRangeProps = ComponentProps<typeof SliderRange>;
export type SliderRootProps = ComponentProps<typeof SliderRoot>;
export type SliderRootProviderProps = ComponentProps<typeof SliderRootProvider>;
export type SliderStepProps = ComponentProps<typeof SliderStep>;
export type SliderStepGroupProps = ComponentProps<typeof SliderStepGroup>;
export type SliderThumbProps = ComponentProps<typeof SliderThumb>;
export type SliderTrackProps = ComponentProps<typeof SliderTrack>;
export type SliderValueTextProps = ComponentProps<typeof SliderValueText>;

export const Slider = Object.assign(SliderRoot, {
	Context: SliderContext,
	Control: SliderControl,
	HiddenInput: SliderHiddenInput,
	Label: SliderLabel,
	Marker: SliderMarker,
	MarkerGroup: SliderMarkerGroup,
	Range: SliderRange,
	Root: SliderRoot,
	RootProvider: SliderRootProvider,
	Step: SliderStep,
	StepGroup: SliderStepGroup,
	Thumb: SliderThumb,
	Track: SliderTrack,
	ValueText: SliderValueText,
});

export type Slider = {
	RootProviderProps: SliderRootProviderProps;
	RootProps: SliderRootProps;
	ContextProps: SliderContextProps;
	ControlProps: SliderControlProps;
	HiddenInputProps: SliderHiddenInputProps;
	LabelProps: SliderLabelProps;
	MarkerProps: SliderMarkerProps;
	MarkerGroupProps: SliderMarkerGroupProps;
	RangeProps: SliderRangeProps;
	StepProps: SliderStepProps;
	StepGroupProps: SliderStepGroupProps;
	ThumbProps: SliderThumbProps;
	TrackProps: SliderTrackProps;
	ValueTextProps: SliderValueTextProps;
	Props: SliderRootProps;
};

export type {
	SliderFocusChangeDetails,
	SliderValueChangeDetails,
	UseSliderContext,
	UseSliderProps,
	UseSliderReturn,
} from "@ark-ui/react/slider";

export { useSlider, useSliderContext } from "@ark-ui/react/slider";

export {
	SliderContext,
	SliderControl,
	SliderHiddenInput,
	SliderLabel,
	SliderMarker,
	SliderMarkerGroup,
	SliderRange,
	SliderRoot,
	SliderRootProvider,
	SliderStep,
	SliderStepGroup,
	SliderThumb,
	SliderTrack,
	SliderValueText,
};
