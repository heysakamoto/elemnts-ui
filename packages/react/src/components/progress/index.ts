import type { ComponentProps } from "react";

import {
	ProgressCircle,
	ProgressCircleRange,
	ProgressCircleTrack,
	ProgressContext,
	ProgressLabel,
	ProgressRange,
	ProgressRoot,
	ProgressRootProvider,
	ProgressTrack,
	ProgressValueText,
	ProgressView,
} from "./progress";

export type ProgressRootProviderProps = ComponentProps<
	typeof ProgressRootProvider
>;
export type ProgressRootProps = ComponentProps<typeof ProgressRoot>;
export type ProgressCircleProps = ComponentProps<typeof ProgressCircle>;
export type ProgressCircleRangeProps = ComponentProps<
	typeof ProgressCircleRange
>;
export type ProgressCircleTrackProps = ComponentProps<
	typeof ProgressCircleTrack
>;
export type ProgressContextProps = ComponentProps<typeof ProgressContext>;
export type ProgressLabelProps = ComponentProps<typeof ProgressLabel>;
export type ProgressRangeProps = ComponentProps<typeof ProgressRange>;
export type ProgressTrackProps = ComponentProps<typeof ProgressTrack>;
export type ProgressValueTextProps = ComponentProps<typeof ProgressValueText>;
export type ProgressViewProps = ComponentProps<typeof ProgressView>;

export const Progress = Object.assign(ProgressRoot, {
	RootProvider: ProgressRootProvider,
	Circle: ProgressCircle,
	CircleRange: ProgressCircleRange,
	CircleTrack: ProgressCircleTrack,
	Context: ProgressContext,
	Label: ProgressLabel,
	Range: ProgressRange,
	Root: ProgressRoot,
	Track: ProgressTrack,
	ValueText: ProgressValueText,
	View: ProgressView,
});

export type Progress = {
	RootProviderProps: ProgressRootProviderProps;
	RootProps: ProgressRootProps;
	ContextProps: ProgressContextProps;
	LabelProps: ProgressLabelProps;
	RangeProps: ProgressRangeProps;
	TrackProps: ProgressTrackProps;
	ValueTextProps: ProgressValueTextProps;
	ViewProps: ProgressViewProps;
	CircleProps: ProgressCircleProps;
	CircleTrackProps: ProgressCircleTrackProps;
	Props: ProgressRootProps;
};

export type {
	ProgressValueChangeDetails,
	ProgressValueTranslationDetails,
	UseProgressContext,
	UseProgressProps,
	UseProgressReturn,
} from "@ark-ui/react/progress";
export { useProgress, useProgressContext } from "@ark-ui/react/progress";

export {
	ProgressCircle,
	ProgressCircleRange,
	ProgressCircleTrack,
	ProgressContext,
	ProgressLabel,
	ProgressRange,
	ProgressRoot,
	ProgressRootProvider,
	ProgressTrack,
	ProgressValueText,
	ProgressView,
};
