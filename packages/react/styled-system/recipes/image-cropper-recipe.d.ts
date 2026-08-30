/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type ImageCropperRecipeVariant = {};

type ImageCropperRecipeVariantMap = {
	[key in keyof ImageCropperRecipeVariant]: Array<
		ImageCropperRecipeVariant[key]
	>;
};

type ImageCropperRecipeSlot =
	| "root"
	| "handle"
	| "grid"
	| "image"
	| "selection"
	| "viewport";

export type ImageCropperRecipeVariantProps = {
	[key in keyof ImageCropperRecipeVariant]?:
		| ConditionalValue<ImageCropperRecipeVariant[key]>
		| undefined;
};

export interface ImageCropperRecipeRecipe {
	__slot: ImageCropperRecipeSlot;
	__type: ImageCropperRecipeVariantProps;
	(
		props?: ImageCropperRecipeVariantProps,
	): Pretty<Record<ImageCropperRecipeSlot, string>>;
	raw: (
		props?: ImageCropperRecipeVariantProps,
	) => ImageCropperRecipeVariantProps;
	variantMap: ImageCropperRecipeVariantMap;
	variantKeys: Array<keyof ImageCropperRecipeVariant>;
	splitVariantProps<Props extends ImageCropperRecipeVariantProps>(
		props: Props,
	): [
		ImageCropperRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof ImageCropperRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: ImageCropperRecipeVariantProps,
	) => ImageCropperRecipeVariantProps;
}

export declare const imageCropperRecipe: ImageCropperRecipeRecipe;
