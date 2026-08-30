/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type EditableRecipeVariant = {};

type EditableRecipeVariantMap = {
	[key in keyof EditableRecipeVariant]: Array<EditableRecipeVariant[key]>;
};

type EditableRecipeSlot =
	| "root"
	| "control"
	| "input"
	| "area"
	| "label"
	| "preview"
	| "editTrigger"
	| "submitTrigger"
	| "cancelTrigger";

export type EditableRecipeVariantProps = {
	[key in keyof EditableRecipeVariant]?:
		| ConditionalValue<EditableRecipeVariant[key]>
		| undefined;
};

export interface EditableRecipeRecipe {
	__slot: EditableRecipeSlot;
	__type: EditableRecipeVariantProps;
	(
		props?: EditableRecipeVariantProps,
	): Pretty<Record<EditableRecipeSlot, string>>;
	raw: (props?: EditableRecipeVariantProps) => EditableRecipeVariantProps;
	variantMap: EditableRecipeVariantMap;
	variantKeys: Array<keyof EditableRecipeVariant>;
	splitVariantProps<Props extends EditableRecipeVariantProps>(
		props: Props,
	): [
		EditableRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof EditableRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: EditableRecipeVariantProps,
	) => EditableRecipeVariantProps;
}

export declare const editableRecipe: EditableRecipeRecipe;
