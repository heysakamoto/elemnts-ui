import type { ComponentProps } from "react";
import {
	EditableArea,
	EditableCancelTrigger,
	EditableContext,
	EditableControl,
	EditableEditTrigger,
	EditableInput,
	EditableLabel,
	EditablePreview,
	EditableRoot,
	EditableRootProvider,
	EditableSubmitTrigger,
} from "./editable";

export type EditableRootProviderProps = ComponentProps<
	typeof EditableRootProvider
>;
export type EditableRootProps = ComponentProps<typeof EditableRoot>;
export type EditableAreaProps = ComponentProps<typeof EditableArea>;
export type EditableLabelProps = ComponentProps<typeof EditableLabel>;
export type EditablePreviewProps = ComponentProps<typeof EditablePreview>;
export type EditableInputProps = ComponentProps<typeof EditableInput>;
export type EditableControlProps = ComponentProps<typeof EditableControl>;
export type EditableEditTriggerProps = ComponentProps<
	typeof EditableEditTrigger
>;
export type EditableSubmitTriggerProps = ComponentProps<
	typeof EditableSubmitTrigger
>;
export type EditableCancelTriggerProps = ComponentProps<
	typeof EditableCancelTrigger
>;
export type EditableContextProps = ComponentProps<typeof EditableContext>;

export const Editable = Object.assign(EditableRoot, {
	Root: EditableRoot,
	RootProvider: EditableRootProvider,
	Area: EditableArea,
	Label: EditableLabel,
	Preview: EditablePreview,
	Input: EditableInput,
	Control: EditableControl,
	EditTrigger: EditableEditTrigger,
	SubmitTrigger: EditableSubmitTrigger,
	CancelTrigger: EditableCancelTrigger,
	Context: EditableContext,
});

export type Editable = {
	RootProviderProps: EditableRootProviderProps;
	RootProps: EditableRootProps;
	AreaProps: EditableAreaProps;
	LabelProps: EditableLabelProps;
	PreviewProps: EditablePreviewProps;
	InputProps: EditableInputProps;
	ControlProps: EditableControlProps;
	EditTriggerProps: EditableEditTriggerProps;
	SubmitTriggerProps: EditableSubmitTriggerProps;
	CancelTriggerProps: EditableCancelTriggerProps;
	ContextProps: EditableContextProps;
	Props: EditableRootProps;
};

export type {
	EditableEditChangeDetails,
	EditableValueChangeDetails,
	UseEditableContext,
	UseEditableProps,
	UseEditableReturn,
} from "@ark-ui/react/editable";

export { useEditable, useEditableContext } from "@ark-ui/react/editable";

export {
	EditableArea,
	EditableCancelTrigger,
	EditableContext,
	EditableControl,
	EditableEditTrigger,
	EditableInput,
	EditableLabel,
	EditablePreview,
	EditableRoot,
	EditableRootProvider,
	EditableSubmitTrigger,
};
