/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type ComboboxRecipeVariant = {};

type ComboboxRecipeVariantMap = {
	[key in keyof ComboboxRecipeVariant]: Array<ComboboxRecipeVariant[key]>;
};

type ComboboxRecipeSlot =
	| "root"
	| "trigger"
	| "content"
	| "control"
	| "label"
	| "positioner"
	| "input"
	| "item"
	| "list"
	| "clearTrigger"
	| "itemGroup"
	| "itemGroupLabel"
	| "itemIndicator"
	| "itemText"
	| "empty"
	| "indicatorGroup";

export type ComboboxRecipeVariantProps = {
	[key in keyof ComboboxRecipeVariant]?:
		| ConditionalValue<ComboboxRecipeVariant[key]>
		| undefined;
};

export interface ComboboxRecipeRecipe {
	__slot: ComboboxRecipeSlot;
	__type: ComboboxRecipeVariantProps;
	(
		props?: ComboboxRecipeVariantProps,
	): Pretty<Record<ComboboxRecipeSlot, string>>;
	raw: (props?: ComboboxRecipeVariantProps) => ComboboxRecipeVariantProps;
	variantMap: ComboboxRecipeVariantMap;
	variantKeys: Array<keyof ComboboxRecipeVariant>;
	splitVariantProps<Props extends ComboboxRecipeVariantProps>(
		props: Props,
	): [
		ComboboxRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof ComboboxRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: ComboboxRecipeVariantProps,
	) => ComboboxRecipeVariantProps;
}

export declare const comboboxRecipe: ComboboxRecipeRecipe;
