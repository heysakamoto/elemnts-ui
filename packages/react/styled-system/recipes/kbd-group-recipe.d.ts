/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type KbdGroupRecipeVariant = {};

type KbdGroupRecipeVariantMap = {
	[key in keyof KbdGroupRecipeVariant]: Array<KbdGroupRecipeVariant[key]>;
};

type KbdGroupRecipeSlot = "root" | "separator";

export type KbdGroupRecipeVariantProps = {
	[key in keyof KbdGroupRecipeVariant]?:
		| ConditionalValue<KbdGroupRecipeVariant[key]>
		| undefined;
};

export interface KbdGroupRecipeRecipe {
	__slot: KbdGroupRecipeSlot;
	__type: KbdGroupRecipeVariantProps;
	(
		props?: KbdGroupRecipeVariantProps,
	): Pretty<Record<KbdGroupRecipeSlot, string>>;
	raw: (props?: KbdGroupRecipeVariantProps) => KbdGroupRecipeVariantProps;
	variantMap: KbdGroupRecipeVariantMap;
	variantKeys: Array<keyof KbdGroupRecipeVariant>;
	splitVariantProps<Props extends KbdGroupRecipeVariantProps>(
		props: Props,
	): [
		KbdGroupRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof KbdGroupRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: KbdGroupRecipeVariantProps,
	) => KbdGroupRecipeVariantProps;
}

export declare const kbdGroupRecipe: KbdGroupRecipeRecipe;
