/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type MarqueeRecipeVariant = {};

type MarqueeRecipeVariantMap = {
	[key in keyof MarqueeRecipeVariant]: Array<MarqueeRecipeVariant[key]>;
};

type MarqueeRecipeSlot = "root" | "content" | "edge" | "item" | "viewport";

export type MarqueeRecipeVariantProps = {
	[key in keyof MarqueeRecipeVariant]?:
		| ConditionalValue<MarqueeRecipeVariant[key]>
		| undefined;
};

export interface MarqueeRecipeRecipe {
	__slot: MarqueeRecipeSlot;
	__type: MarqueeRecipeVariantProps;
	(
		props?: MarqueeRecipeVariantProps,
	): Pretty<Record<MarqueeRecipeSlot, string>>;
	raw: (props?: MarqueeRecipeVariantProps) => MarqueeRecipeVariantProps;
	variantMap: MarqueeRecipeVariantMap;
	variantKeys: Array<keyof MarqueeRecipeVariant>;
	splitVariantProps<Props extends MarqueeRecipeVariantProps>(
		props: Props,
	): [
		MarqueeRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof MarqueeRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: MarqueeRecipeVariantProps,
	) => MarqueeRecipeVariantProps;
}

export declare const marqueeRecipe: MarqueeRecipeRecipe;
