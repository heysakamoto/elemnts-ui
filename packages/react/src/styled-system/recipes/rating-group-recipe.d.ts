/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type RatingGroupRecipeVariant = {};

type RatingGroupRecipeVariantMap = {
	[key in keyof RatingGroupRecipeVariant]: Array<RatingGroupRecipeVariant[key]>;
};

type RatingGroupRecipeSlot =
	| "root"
	| "control"
	| "label"
	| "item"
	| "itemIndicator";

export type RatingGroupRecipeVariantProps = {
	[key in keyof RatingGroupRecipeVariant]?:
		| ConditionalValue<RatingGroupRecipeVariant[key]>
		| undefined;
};

export interface RatingGroupRecipeRecipe {
	__slot: RatingGroupRecipeSlot;
	__type: RatingGroupRecipeVariantProps;
	(
		props?: RatingGroupRecipeVariantProps,
	): Pretty<Record<RatingGroupRecipeSlot, string>>;
	raw: (props?: RatingGroupRecipeVariantProps) => RatingGroupRecipeVariantProps;
	variantMap: RatingGroupRecipeVariantMap;
	variantKeys: Array<keyof RatingGroupRecipeVariant>;
	splitVariantProps<Props extends RatingGroupRecipeVariantProps>(
		props: Props,
	): [
		RatingGroupRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof RatingGroupRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: RatingGroupRecipeVariantProps,
	) => RatingGroupRecipeVariantProps;
}

export declare const ratingGroupRecipe: RatingGroupRecipeRecipe;
