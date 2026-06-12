import type { ComponentProps } from "react";
import {
	FieldContext,
	FieldErrorText,
	FieldHelperText,
	FieldInput,
	FieldLabel,
	FieldRequiredIndicator,
	FieldRoot,
	FieldRootProvider,
	FieldSelect,
	FieldTextarea,
} from "./field";

export type FieldRootProviderProps = ComponentProps<typeof FieldRootProvider>;
export type FieldRootProps = ComponentProps<typeof FieldRoot>;
export type FieldLabelProps = ComponentProps<typeof FieldLabel>;
export type FieldInputProps = ComponentProps<typeof FieldInput>;
export type FieldTextareaProps = ComponentProps<typeof FieldTextarea>;
export type FieldSelectProps = ComponentProps<typeof FieldSelect>;
export type FieldHelperTextProps = ComponentProps<typeof FieldHelperText>;
export type FieldErrorTextProps = ComponentProps<typeof FieldErrorText>;
export type FieldRequiredIndicatorProps = ComponentProps<
	typeof FieldRequiredIndicator
>;
export type FieldContextProps = ComponentProps<typeof FieldContext>;

export const Field = Object.assign(FieldRoot, {
	Root: FieldRoot,
	Provider: FieldRootProvider,
	Label: FieldLabel,
	Input: FieldInput,
	Textarea: FieldTextarea,
	Select: FieldSelect,
	HelperText: FieldHelperText,
	RequiredIndicator: FieldRequiredIndicator,
	ErrorText: FieldErrorText,
	Context: FieldContext,
});

export type Field = {
	Props: FieldRootProps;
	RootProviderProps: FieldRootProviderProps;
	RootProps: FieldRootProps;
	LabelProps: FieldLabelProps;
	InputProps: FieldInputProps;
	TextareaProps: FieldTextareaProps;
	SelectProps: FieldSelectProps;
	HelperTextProps: FieldHelperTextProps;
	ErrorTextProps: FieldErrorTextProps;
	ContextProps: FieldContextProps;
	RequiredIndicatorProps: FieldRequiredIndicatorProps;
};

export type {
	UseFieldContext,
	UseFieldProps,
	UseFieldReturn,
} from "@ark-ui/react/field";

export { useField, useFieldContext } from "@ark-ui/react/field";

export {
	FieldContext,
	FieldErrorText,
	FieldHelperText,
	FieldInput,
	FieldLabel,
	FieldRequiredIndicator,
	FieldRoot,
	FieldRootProvider,
	FieldSelect,
	FieldTextarea,
};
