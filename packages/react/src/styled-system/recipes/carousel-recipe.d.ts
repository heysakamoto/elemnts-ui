/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type CarouselRecipeVariant = {};

type CarouselRecipeVariantMap = {
	[key in keyof CarouselRecipeVariant]: Array<CarouselRecipeVariant[key]>;
};

type CarouselRecipeSlot =
	| "root"
	| "indicator"
	| "control"
	| "item"
	| "nextTrigger"
	| "prevTrigger"
	| "viewport"
	| "itemGroup"
	| "indicatorGroup"
	| "autoplayTrigger"
	| "autoplayIndicator"
	| "progressText";

export type CarouselRecipeVariantProps = {
	[key in keyof CarouselRecipeVariant]?:
		| ConditionalValue<CarouselRecipeVariant[key]>
		| undefined;
};

export interface CarouselRecipeRecipe {
	__slot: CarouselRecipeSlot;
	__type: CarouselRecipeVariantProps;
	(
		props?: CarouselRecipeVariantProps,
	): Pretty<Record<CarouselRecipeSlot, string>>;
	raw: (props?: CarouselRecipeVariantProps) => CarouselRecipeVariantProps;
	variantMap: CarouselRecipeVariantMap;
	variantKeys: Array<keyof CarouselRecipeVariant>;
	splitVariantProps<Props extends CarouselRecipeVariantProps>(
		props: Props,
	): [
		CarouselRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof CarouselRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: CarouselRecipeVariantProps,
	) => CarouselRecipeVariantProps;
}

export declare const carouselRecipe: CarouselRecipeRecipe;
