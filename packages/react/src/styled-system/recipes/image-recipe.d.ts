/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type ImageRecipeVariant = {};

type ImageRecipeVariantMap = {
	[key in keyof ImageRecipeVariant]: Array<ImageRecipeVariant[key]>;
};

export type ImageRecipeVariantProps = {
	[key in keyof ImageRecipeVariant]?:
		| ConditionalValue<ImageRecipeVariant[key]>
		| undefined;
};

export interface ImageRecipeRecipe {
	__type: ImageRecipeVariantProps;
	(props?: ImageRecipeVariantProps): string;
	raw: (props?: ImageRecipeVariantProps) => ImageRecipeVariantProps;
	variantMap: ImageRecipeVariantMap;
	variantKeys: Array<keyof ImageRecipeVariant>;
	splitVariantProps<Props extends ImageRecipeVariantProps>(
		props: Props,
	): [
		ImageRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof ImageRecipeVariantProps>>,
	];
	getVariantProps: (props?: ImageRecipeVariantProps) => ImageRecipeVariantProps;
}

export declare const imageRecipe: ImageRecipeRecipe;
