/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface SwapRecipeVariant {
	mode: "fade" | "flip" | "scale" | "rotate";
}

type SwapRecipeVariantMap = {
	[key in keyof SwapRecipeVariant]: Array<SwapRecipeVariant[key]>;
};

type SwapRecipeSlot = "root" | "indicator";

export type SwapRecipeVariantProps = {
	[key in keyof SwapRecipeVariant]?:
		| ConditionalValue<SwapRecipeVariant[key]>
		| undefined;
};

export interface SwapRecipeRecipe {
	__slot: SwapRecipeSlot;
	__type: SwapRecipeVariantProps;
	(props?: SwapRecipeVariantProps): Pretty<Record<SwapRecipeSlot, string>>;
	raw: (props?: SwapRecipeVariantProps) => SwapRecipeVariantProps;
	variantMap: SwapRecipeVariantMap;
	variantKeys: Array<keyof SwapRecipeVariant>;
	splitVariantProps<Props extends SwapRecipeVariantProps>(
		props: Props,
	): [
		SwapRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof SwapRecipeVariantProps>>,
	];
	getVariantProps: (props?: SwapRecipeVariantProps) => SwapRecipeVariantProps;
}

export declare const swapRecipe: SwapRecipeRecipe;
