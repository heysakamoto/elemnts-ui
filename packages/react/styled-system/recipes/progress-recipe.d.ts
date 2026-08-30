/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface ProgressRecipeVariant {
	/**
	 * @default "md"
	 */
	size: "xs" | "sm" | "md" | "lg" | "xl";
	/**
	 * @default "sm"
	 */
	thickness: "xs" | "sm" | "md" | "lg" | "xl";
}

type ProgressRecipeVariantMap = {
	[key in keyof ProgressRecipeVariant]: Array<ProgressRecipeVariant[key]>;
};

type ProgressRecipeSlot =
	| "circle"
	| "range"
	| "root"
	| "label"
	| "track"
	| "valueText"
	| "view"
	| "circleTrack"
	| "circleRange";

export type ProgressRecipeVariantProps = {
	[key in keyof ProgressRecipeVariant]?:
		| ConditionalValue<ProgressRecipeVariant[key]>
		| undefined;
};

export interface ProgressRecipeRecipe {
	__slot: ProgressRecipeSlot;
	__type: ProgressRecipeVariantProps;
	(
		props?: ProgressRecipeVariantProps,
	): Pretty<Record<ProgressRecipeSlot, string>>;
	raw: (props?: ProgressRecipeVariantProps) => ProgressRecipeVariantProps;
	variantMap: ProgressRecipeVariantMap;
	variantKeys: Array<keyof ProgressRecipeVariant>;
	splitVariantProps<Props extends ProgressRecipeVariantProps>(
		props: Props,
	): [
		ProgressRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof ProgressRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: ProgressRecipeVariantProps,
	) => ProgressRecipeVariantProps;
}

export declare const progressRecipe: ProgressRecipeRecipe;
