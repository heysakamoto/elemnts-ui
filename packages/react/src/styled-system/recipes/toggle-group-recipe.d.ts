/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface ToggleGroupRecipeVariant {
	/**
	 * @default false
	 */
	fullWidth: boolean;
	/**
	 * @default false
	 */
	attached: boolean;
	/**
	 * @default "horizontal"
	 */
	orientation: "horizontal" | "vertical";
}

type ToggleGroupRecipeVariantMap = {
	[key in keyof ToggleGroupRecipeVariant]: Array<ToggleGroupRecipeVariant[key]>;
};

type ToggleGroupRecipeSlot = "root" | "item";

export type ToggleGroupRecipeVariantProps = {
	[key in keyof ToggleGroupRecipeVariant]?:
		| ToggleGroupRecipeVariant[key]
		| undefined;
};

export interface ToggleGroupRecipeRecipe {
	__slot: ToggleGroupRecipeSlot;
	__type: ToggleGroupRecipeVariantProps;
	(
		props?: ToggleGroupRecipeVariantProps,
	): Pretty<Record<ToggleGroupRecipeSlot, string>>;
	raw: (props?: ToggleGroupRecipeVariantProps) => ToggleGroupRecipeVariantProps;
	variantMap: ToggleGroupRecipeVariantMap;
	variantKeys: Array<keyof ToggleGroupRecipeVariant>;
	splitVariantProps<Props extends ToggleGroupRecipeVariantProps>(
		props: Props,
	): [
		ToggleGroupRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof ToggleGroupRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: ToggleGroupRecipeVariantProps,
	) => ToggleGroupRecipeVariantProps;
}

export declare const toggleGroupRecipe: ToggleGroupRecipeRecipe;
