import type { ComponentProps } from "react";

import {
	DateInputContext,
	DateInputControl,
	DateInputHiddenInput,
	DateInputLabel,
	DateInputRoot,
	DateInputRootProvider,
	DateInputSegment,
	DateInputSegmentContext,
	DateInputSegmentGroup,
} from "./date-input";

export type DateInputRootProviderProps = ComponentProps<
	typeof DateInputRootProvider
>;
export type DateInputContextProps = ComponentProps<typeof DateInputContext>;
export type DateInputRootProps = ComponentProps<typeof DateInputRoot>;
export type DateInputControlProps = ComponentProps<typeof DateInputControl>;
export type DateInputHiddenInputProps = ComponentProps<
	typeof DateInputHiddenInput
>;
export type DateInputSegmentGroupProps = ComponentProps<
	typeof DateInputSegmentGroup
>;
export type DateInputSegmentProps = ComponentProps<typeof DateInputSegment>;
export type DateInputLabelProps = ComponentProps<typeof DateInputLabel>;
export type DateInputSegmentContextProps = ComponentProps<
	typeof DateInputSegmentContext
>;

export type DateInput = {
	RootProviderProps: DateInputRootProviderProps;
	ContextProps: DateInputContextProps;
	RootProps: DateInputRootProps;
	ControlProps: DateInputControlProps;
	HiddenInputProps: DateInputHiddenInputProps;
	SegmentGroupProps: DateInputSegmentGroupProps;
	SegmentProps: DateInputSegmentProps;
	LabelProps: DateInputLabelProps;
	SegmentContextProps: DateInputSegmentContextProps;
};

export const DateInput = Object.assign(DateInputRoot, {
	Root: DateInputRoot,
	Control: DateInputControl,
	HiddenInput: DateInputHiddenInput,
	SegmentGroup: DateInputSegmentGroup,
	Segment: DateInputSegment,
	Label: DateInputLabel,
	RootProvider: DateInputRootProvider,
	Context: DateInputContext,
	SegmentContext: DateInputSegmentContext,
});

export {
	DateInputContext,
	DateInputControl,
	DateInputHiddenInput,
	DateInputLabel,
	DateInputRoot,
	DateInputRootProvider,
	DateInputSegment,
	DateInputSegmentContext,
	DateInputSegmentGroup,
};
