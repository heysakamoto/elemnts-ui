/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type SortableRecipeVariant = {};

type SortableRecipeVariantMap = {
	[key in keyof SortableRecipeVariant]: Array<SortableRecipeVariant[key]>;
};

type SortableRecipeSlot = "root" | "itemHandle" | "item";

export type SortableRecipeVariantProps = {
	[key in keyof SortableRecipeVariant]?:
		| ConditionalValue<SortableRecipeVariant[key]>
		| undefined;
};

export interface SortableRecipeRecipe {
	__slot: SortableRecipeSlot;
	__type: SortableRecipeVariantProps;
	(
		props?: SortableRecipeVariantProps,
	): Pretty<Record<SortableRecipeSlot, string>>;
	raw: (props?: SortableRecipeVariantProps) => SortableRecipeVariantProps;
	variantMap: SortableRecipeVariantMap;
	variantKeys: Array<keyof SortableRecipeVariant>;
	splitVariantProps<Props extends SortableRecipeVariantProps>(
		props: Props,
	): [
		SortableRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof SortableRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: SortableRecipeVariantProps,
	) => SortableRecipeVariantProps;
}

export declare const sortableRecipe: SortableRecipeRecipe;
