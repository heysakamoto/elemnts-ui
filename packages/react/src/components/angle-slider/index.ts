import type { ComponentProps } from "react";
import {
	AngleSliderContext,
	AngleSliderControl,
	AngleSliderLabel,
	AngleSliderMarker,
	AngleSliderMarkerGroup,
	AngleSliderRoot,
	AngleSliderRootProvider,
	AngleSliderThumb,
	AngleSliderValueText,
} from "./angle-slider";

export type AngleSliderRootProviderProps = ComponentProps<
	typeof AngleSliderRootProvider
>;
export type AngleSliderRootProps = ComponentProps<typeof AngleSliderRoot>;
export type AngleSliderControlProps = ComponentProps<typeof AngleSliderControl>;
export type AngleSliderMarkerProps = ComponentProps<typeof AngleSliderMarker>;
export type AngleSliderMarkerGroupProps = ComponentProps<
	typeof AngleSliderMarkerGroup
>;
export type AngleSliderThumbProps = ComponentProps<typeof AngleSliderThumb>;
export type AngleSliderValueTextProps = ComponentProps<
	typeof AngleSliderValueText
>;
export type AngleSliderLabelProps = ComponentProps<typeof AngleSliderLabel>;
export type AngleSliderContextProps = ComponentProps<typeof AngleSliderContext>;

export const AngleSlider = Object.assign(AngleSliderRoot, {
	Control: AngleSliderControl,
	Marker: AngleSliderMarker,
	MarkerGroup: AngleSliderMarkerGroup,
	Thumb: AngleSliderThumb,
	ValueText: AngleSliderValueText,
	Label: AngleSliderLabel,
	Context: AngleSliderContext,
	RootProvider: AngleSliderRootProvider,
	Root: AngleSliderRoot,
});

export type AngleSlider = {
	RootProviderProps: AngleSliderRootProviderProps;
	RootProps: AngleSliderRootProps;
	ControlProps: AngleSliderControlProps;
	MarkerProps: AngleSliderMarkerProps;
	MarkerGroupProps: AngleSliderMarkerGroupProps;
	ThumbProps: AngleSliderThumbProps;
	ValueTextProps: AngleSliderValueTextProps;
	LabelProps: AngleSliderLabelProps;
	ContextProps: AngleSliderContextProps;
	Props: AngleSliderRootProps;
};

export type {
	UseAngleSliderContext,
	UseAngleSliderProps,
	UseAngleSliderReturn,
} from "@ark-ui/react/angle-slider";

export {
	useAngleSlider,
	useAngleSliderContext,
} from "@ark-ui/react/angle-slider";

export {
	AngleSliderContext,
	AngleSliderControl,
	AngleSliderLabel,
	AngleSliderMarker,
	AngleSliderMarkerGroup,
	AngleSliderRoot,
	AngleSliderRootProvider,
	AngleSliderThumb,
	AngleSliderValueText,
};
