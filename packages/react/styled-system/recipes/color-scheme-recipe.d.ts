/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type ColorSchemeRecipeVariant = {};

type ColorSchemeRecipeVariantMap = {
	[key in keyof ColorSchemeRecipeVariant]: Array<ColorSchemeRecipeVariant[key]>;
};

type ColorSchemeRecipeSlot = "root" | "trigger" | "indicator";

export type ColorSchemeRecipeVariantProps = {
	[key in keyof ColorSchemeRecipeVariant]?:
		| ConditionalValue<ColorSchemeRecipeVariant[key]>
		| undefined;
};

export interface ColorSchemeRecipeRecipe {
	__slot: ColorSchemeRecipeSlot;
	__type: ColorSchemeRecipeVariantProps;
	(
		props?: ColorSchemeRecipeVariantProps,
	): Pretty<Record<ColorSchemeRecipeSlot, string>>;
	raw: (props?: ColorSchemeRecipeVariantProps) => ColorSchemeRecipeVariantProps;
	variantMap: ColorSchemeRecipeVariantMap;
	variantKeys: Array<keyof ColorSchemeRecipeVariant>;
	splitVariantProps<Props extends ColorSchemeRecipeVariantProps>(
		props: Props,
	): [
		ColorSchemeRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof ColorSchemeRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: ColorSchemeRecipeVariantProps,
	) => ColorSchemeRecipeVariantProps;
}

export declare const colorSchemeRecipe: ColorSchemeRecipeRecipe;
