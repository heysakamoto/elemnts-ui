/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface SegmentGroupRecipeVariant {
	/**
	 * @default false
	 */
	fullWidth: boolean;
	/**
	 * @default "md"
	 */
	size: "xs" | "sm" | "md" | "lg" | "xl";
	/**
	 * @default "primary"
	 */
	variant: "primary" | "secondary" | "tertiary";
}

type SegmentGroupRecipeVariantMap = {
	[key in keyof SegmentGroupRecipeVariant]: Array<
		SegmentGroupRecipeVariant[key]
	>;
};

type SegmentGroupRecipeSlot =
	| "root"
	| "label"
	| "item"
	| "indicator"
	| "itemText"
	| "itemControl";

export type SegmentGroupRecipeVariantProps = {
	[key in keyof SegmentGroupRecipeVariant]?:
		| ConditionalValue<SegmentGroupRecipeVariant[key]>
		| undefined;
};

export interface SegmentGroupRecipeRecipe {
	__slot: SegmentGroupRecipeSlot;
	__type: SegmentGroupRecipeVariantProps;
	(
		props?: SegmentGroupRecipeVariantProps,
	): Pretty<Record<SegmentGroupRecipeSlot, string>>;
	raw: (
		props?: SegmentGroupRecipeVariantProps,
	) => SegmentGroupRecipeVariantProps;
	variantMap: SegmentGroupRecipeVariantMap;
	variantKeys: Array<keyof SegmentGroupRecipeVariant>;
	splitVariantProps<Props extends SegmentGroupRecipeVariantProps>(
		props: Props,
	): [
		SegmentGroupRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof SegmentGroupRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: SegmentGroupRecipeVariantProps,
	) => SegmentGroupRecipeVariantProps;
}

export declare const segmentGroupRecipe: SegmentGroupRecipeRecipe;
