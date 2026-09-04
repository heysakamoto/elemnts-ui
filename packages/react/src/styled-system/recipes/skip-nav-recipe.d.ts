/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type SkipNavRecipeVariant = {};

type SkipNavRecipeVariantMap = {
	[key in keyof SkipNavRecipeVariant]: Array<SkipNavRecipeVariant[key]>;
};

type SkipNavRecipeSlot = "root" | "link" | "content";

export type SkipNavRecipeVariantProps = {
	[key in keyof SkipNavRecipeVariant]?:
		| ConditionalValue<SkipNavRecipeVariant[key]>
		| undefined;
};

export interface SkipNavRecipeRecipe {
	__slot: SkipNavRecipeSlot;
	__type: SkipNavRecipeVariantProps;
	(
		props?: SkipNavRecipeVariantProps,
	): Pretty<Record<SkipNavRecipeSlot, string>>;
	raw: (props?: SkipNavRecipeVariantProps) => SkipNavRecipeVariantProps;
	variantMap: SkipNavRecipeVariantMap;
	variantKeys: Array<keyof SkipNavRecipeVariant>;
	splitVariantProps<Props extends SkipNavRecipeVariantProps>(
		props: Props,
	): [
		SkipNavRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof SkipNavRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: SkipNavRecipeVariantProps,
	) => SkipNavRecipeVariantProps;
}

export declare const skipNavRecipe: SkipNavRecipeRecipe;
