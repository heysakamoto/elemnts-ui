/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type PopoverRecipeVariant = {};

type PopoverRecipeVariantMap = {
	[key in keyof PopoverRecipeVariant]: Array<PopoverRecipeVariant[key]>;
};

type PopoverRecipeSlot =
	| "content"
	| "trigger"
	| "title"
	| "description"
	| "indicator"
	| "anchor"
	| "arrow"
	| "arrowTip"
	| "positioner"
	| "closeTrigger";

export type PopoverRecipeVariantProps = {
	[key in keyof PopoverRecipeVariant]?:
		| ConditionalValue<PopoverRecipeVariant[key]>
		| undefined;
};

export interface PopoverRecipeRecipe {
	__slot: PopoverRecipeSlot;
	__type: PopoverRecipeVariantProps;
	(
		props?: PopoverRecipeVariantProps,
	): Pretty<Record<PopoverRecipeSlot, string>>;
	raw: (props?: PopoverRecipeVariantProps) => PopoverRecipeVariantProps;
	variantMap: PopoverRecipeVariantMap;
	variantKeys: Array<keyof PopoverRecipeVariant>;
	splitVariantProps<Props extends PopoverRecipeVariantProps>(
		props: Props,
	): [
		PopoverRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof PopoverRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: PopoverRecipeVariantProps,
	) => PopoverRecipeVariantProps;
}

export declare const popoverRecipe: PopoverRecipeRecipe;
