/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type SeparatorGroupRecipeVariant = {};

type SeparatorGroupRecipeVariantMap = {
	[key in keyof SeparatorGroupRecipeVariant]: Array<
		SeparatorGroupRecipeVariant[key]
	>;
};

type SeparatorGroupRecipeSlot = "root" | "caption";

export type SeparatorGroupRecipeVariantProps = {
	[key in keyof SeparatorGroupRecipeVariant]?:
		| ConditionalValue<SeparatorGroupRecipeVariant[key]>
		| undefined;
};

export interface SeparatorGroupRecipeRecipe {
	__slot: SeparatorGroupRecipeSlot;
	__type: SeparatorGroupRecipeVariantProps;
	(
		props?: SeparatorGroupRecipeVariantProps,
	): Pretty<Record<SeparatorGroupRecipeSlot, string>>;
	raw: (
		props?: SeparatorGroupRecipeVariantProps,
	) => SeparatorGroupRecipeVariantProps;
	variantMap: SeparatorGroupRecipeVariantMap;
	variantKeys: Array<keyof SeparatorGroupRecipeVariant>;
	splitVariantProps<Props extends SeparatorGroupRecipeVariantProps>(
		props: Props,
	): [
		SeparatorGroupRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof SeparatorGroupRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: SeparatorGroupRecipeVariantProps,
	) => SeparatorGroupRecipeVariantProps;
}

export declare const separatorGroupRecipe: SeparatorGroupRecipeRecipe;
