/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type VirtualListRecipeVariant = {};

type VirtualListRecipeVariantMap = {
	[key in keyof VirtualListRecipeVariant]: Array<VirtualListRecipeVariant[key]>;
};

type VirtualListRecipeSlot = "root" | "viewport" | "content" | "item";

export type VirtualListRecipeVariantProps = {
	[key in keyof VirtualListRecipeVariant]?:
		| ConditionalValue<VirtualListRecipeVariant[key]>
		| undefined;
};

export interface VirtualListRecipeRecipe {
	__slot: VirtualListRecipeSlot;
	__type: VirtualListRecipeVariantProps;
	(
		props?: VirtualListRecipeVariantProps,
	): Pretty<Record<VirtualListRecipeSlot, string>>;
	raw: (props?: VirtualListRecipeVariantProps) => VirtualListRecipeVariantProps;
	variantMap: VirtualListRecipeVariantMap;
	variantKeys: Array<keyof VirtualListRecipeVariant>;
	splitVariantProps<Props extends VirtualListRecipeVariantProps>(
		props: Props,
	): [
		VirtualListRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof VirtualListRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: VirtualListRecipeVariantProps,
	) => VirtualListRecipeVariantProps;
}

export declare const virtualListRecipe: VirtualListRecipeRecipe;
