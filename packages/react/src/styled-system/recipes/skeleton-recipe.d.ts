/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface SkeletonRecipeVariant {
	/**
	 * @default false
	 */
	textOnly: boolean;
	/**
	 * @default "pulse"
	 */
	effect: "pulse" | "shimmer";
}

type SkeletonRecipeVariantMap = {
	[key in keyof SkeletonRecipeVariant]: Array<SkeletonRecipeVariant[key]>;
};

export type SkeletonRecipeVariantProps = {
	[key in keyof SkeletonRecipeVariant]?:
		| ConditionalValue<SkeletonRecipeVariant[key]>
		| undefined;
};

export interface SkeletonRecipeRecipe {
	__type: SkeletonRecipeVariantProps;
	(props?: SkeletonRecipeVariantProps): string;
	raw: (props?: SkeletonRecipeVariantProps) => SkeletonRecipeVariantProps;
	variantMap: SkeletonRecipeVariantMap;
	variantKeys: Array<keyof SkeletonRecipeVariant>;
	splitVariantProps<Props extends SkeletonRecipeVariantProps>(
		props: Props,
	): [
		SkeletonRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof SkeletonRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: SkeletonRecipeVariantProps,
	) => SkeletonRecipeVariantProps;
}

export declare const skeletonRecipe: SkeletonRecipeRecipe;
