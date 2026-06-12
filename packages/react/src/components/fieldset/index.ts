import type { ComponentProps } from "react";
import {
	FieldsetContext,
	FieldsetErrorText,
	FieldsetHelperText,
	FieldsetLegend,
	FieldsetRoot,
	FieldsetRootProvider,
} from "./fieldset";

export type FieldsetRootProviderProps = ComponentProps<
	typeof FieldsetRootProvider
>;
export type FieldsetRootProps = ComponentProps<typeof FieldsetRoot>;
export type FieldsetLegendProps = ComponentProps<typeof FieldsetLegend>;
export type FieldsetHelperTextProps = ComponentProps<typeof FieldsetHelperText>;
export type FieldsetErrorTextProps = ComponentProps<typeof FieldsetErrorText>;
export type FieldsetContextProps = ComponentProps<typeof FieldsetContext>;

export const Fieldset = Object.assign(FieldsetRoot, {
	Legend: FieldsetLegend,
	HelperText: FieldsetHelperText,
	ErrorText: FieldsetErrorText,
	Context: FieldsetContext,
	RootProvider: FieldsetRootProvider,
	Root: FieldsetRoot,
});

export type Fieldset = {
	RootProviderProps: FieldsetRootProviderProps;
	RootProps: FieldsetRootProps;
	LegendProps: FieldsetLegendProps;
	HelperTextProps: FieldsetHelperTextProps;
	ErrorTextProps: FieldsetErrorTextProps;
	ContextProps: FieldsetContextProps;
	Props: FieldsetRootProps;
};

export type {
	UseFieldsetContext,
	UseFieldsetProps,
	UseFieldsetReturn,
} from "@ark-ui/react/fieldset";

export { useFieldset, useFieldsetContext } from "@ark-ui/react/fieldset";

export {
	FieldsetContext,
	FieldsetErrorText,
	FieldsetHelperText,
	FieldsetLegend,
	FieldsetRoot,
	FieldsetRootProvider,
};
