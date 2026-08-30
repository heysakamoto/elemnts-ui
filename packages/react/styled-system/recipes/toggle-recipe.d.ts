/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type ToggleRecipeVariant = {};

type ToggleRecipeVariantMap = {
	[key in keyof ToggleRecipeVariant]: Array<ToggleRecipeVariant[key]>;
};

type ToggleRecipeSlot = "root" | "indicator";

export type ToggleRecipeVariantProps = {
	[key in keyof ToggleRecipeVariant]?:
		| ConditionalValue<ToggleRecipeVariant[key]>
		| undefined;
};

export interface ToggleRecipeRecipe {
	__slot: ToggleRecipeSlot;
	__type: ToggleRecipeVariantProps;
	(props?: ToggleRecipeVariantProps): Pretty<Record<ToggleRecipeSlot, string>>;
	raw: (props?: ToggleRecipeVariantProps) => ToggleRecipeVariantProps;
	variantMap: ToggleRecipeVariantMap;
	variantKeys: Array<keyof ToggleRecipeVariant>;
	splitVariantProps<Props extends ToggleRecipeVariantProps>(
		props: Props,
	): [
		ToggleRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof ToggleRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: ToggleRecipeVariantProps,
	) => ToggleRecipeVariantProps;
}

export declare const toggleRecipe: ToggleRecipeRecipe;
