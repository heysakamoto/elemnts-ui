/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type AspectRatioRecipeVariant = {};

type AspectRatioRecipeVariantMap = {
	[key in keyof AspectRatioRecipeVariant]: Array<AspectRatioRecipeVariant[key]>;
};

export type AspectRatioRecipeVariantProps = {
	[key in keyof AspectRatioRecipeVariant]?:
		| ConditionalValue<AspectRatioRecipeVariant[key]>
		| undefined;
};

export interface AspectRatioRecipeRecipe {
	__type: AspectRatioRecipeVariantProps;
	(props?: AspectRatioRecipeVariantProps): string;
	raw: (props?: AspectRatioRecipeVariantProps) => AspectRatioRecipeVariantProps;
	variantMap: AspectRatioRecipeVariantMap;
	variantKeys: Array<keyof AspectRatioRecipeVariant>;
	splitVariantProps<Props extends AspectRatioRecipeVariantProps>(
		props: Props,
	): [
		AspectRatioRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof AspectRatioRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: AspectRatioRecipeVariantProps,
	) => AspectRatioRecipeVariantProps;
}

export declare const aspectRatioRecipe: AspectRatioRecipeRecipe;
