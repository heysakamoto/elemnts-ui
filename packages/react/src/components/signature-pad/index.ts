import type { ComponentProps } from "react";

import {
	SignaturePadClearTrigger,
	SignaturePadContext,
	SignaturePadControl,
	SignaturePadGuide,
	SignaturePadHiddenInput,
	SignaturePadLabel,
	SignaturePadRoot,
	SignaturePadRootProvider,
	SignaturePadSegment,
} from "./signature-pad";

export type SignaturePadRootProviderProps = ComponentProps<
	typeof SignaturePadRootProvider
>;
export type SignaturePadRootProps = ComponentProps<typeof SignaturePadRoot>;
export type SignaturePadClearTriggerProps = ComponentProps<
	typeof SignaturePadClearTrigger
>;
export type SignaturePadContextProps = ComponentProps<
	typeof SignaturePadContext
>;
export type SignaturePadControlProps = ComponentProps<
	typeof SignaturePadControl
>;
export type SignaturePadGuideProps = ComponentProps<typeof SignaturePadGuide>;
export type SignaturePadHiddenInputProps = ComponentProps<
	typeof SignaturePadHiddenInput
>;
export type SignaturePadLabelProps = ComponentProps<typeof SignaturePadLabel>;
export type SignaturePadSegmentProps = ComponentProps<
	typeof SignaturePadSegment
>;

export const SignaturePad = Object.assign(SignaturePadRoot, {
	ClearTrigger: SignaturePadClearTrigger,
	Context: SignaturePadContext,
	Control: SignaturePadControl,
	Guide: SignaturePadGuide,
	HiddenInput: SignaturePadHiddenInput,
	Label: SignaturePadLabel,
	Root: SignaturePadRoot,
	RootProvider: SignaturePadRootProvider,
	Segment: SignaturePadSegment,
});

export type SignaturePad = {
	Props: SignaturePadRootProps;
	RootProviderProps: SignaturePadRootProviderProps;
	RootProps: SignaturePadRootProps;
	ClearTriggerProps: SignaturePadClearTriggerProps;
	ContextProps: SignaturePadContextProps;
	ControlProps: SignaturePadControlProps;
	GuideProps: SignaturePadGuideProps;
	HiddenInputProps: SignaturePadHiddenInputProps;
	LabelProps: SignaturePadLabelProps;
	SegmentProps: SignaturePadSegmentProps;
};

export type {
	SignaturePadDrawDetails,
	SignaturePadDrawEndDetails,
	UseSignaturePadContext,
	UseSignaturePadProps,
	UseSignaturePadReturn,
} from "@ark-ui/react/signature-pad";
export {
	useSignaturePad,
	useSignaturePadContext,
} from "@ark-ui/react/signature-pad";

export {
	SignaturePadClearTrigger,
	SignaturePadContext,
	SignaturePadControl,
	SignaturePadGuide,
	SignaturePadHiddenInput,
	SignaturePadLabel,
	SignaturePadRoot,
	SignaturePadRootProvider,
	SignaturePadSegment,
};
