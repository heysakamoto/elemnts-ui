/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface SpinnerRecipeVariant {
	/**
	 * @default "normal"
	 */
	speed: "slow" | "normal" | "fast";
	/**
	 * @default "md"
	 */
	size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

type SpinnerRecipeVariantMap = {
	[key in keyof SpinnerRecipeVariant]: Array<SpinnerRecipeVariant[key]>;
};

export type SpinnerRecipeVariantProps = {
	[key in keyof SpinnerRecipeVariant]?:
		| ConditionalValue<SpinnerRecipeVariant[key]>
		| undefined;
};

export interface SpinnerRecipeRecipe {
	__type: SpinnerRecipeVariantProps;
	(props?: SpinnerRecipeVariantProps): string;
	raw: (props?: SpinnerRecipeVariantProps) => SpinnerRecipeVariantProps;
	variantMap: SpinnerRecipeVariantMap;
	variantKeys: Array<keyof SpinnerRecipeVariant>;
	splitVariantProps<Props extends SpinnerRecipeVariantProps>(
		props: Props,
	): [
		SpinnerRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof SpinnerRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: SpinnerRecipeVariantProps,
	) => SpinnerRecipeVariantProps;
}

export declare const spinnerRecipe: SpinnerRecipeRecipe;
