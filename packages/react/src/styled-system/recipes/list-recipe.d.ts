/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type ListRecipeVariant = {};

type ListRecipeVariantMap = {
	[key in keyof ListRecipeVariant]: Array<ListRecipeVariant[key]>;
};

type ListRecipeSlot = "root" | "item" | "indicator";

export type ListRecipeVariantProps = {
	[key in keyof ListRecipeVariant]?:
		| ConditionalValue<ListRecipeVariant[key]>
		| undefined;
};

export interface ListRecipeRecipe {
	__slot: ListRecipeSlot;
	__type: ListRecipeVariantProps;
	(props?: ListRecipeVariantProps): Pretty<Record<ListRecipeSlot, string>>;
	raw: (props?: ListRecipeVariantProps) => ListRecipeVariantProps;
	variantMap: ListRecipeVariantMap;
	variantKeys: Array<keyof ListRecipeVariant>;
	splitVariantProps<Props extends ListRecipeVariantProps>(
		props: Props,
	): [
		ListRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof ListRecipeVariantProps>>,
	];
	getVariantProps: (props?: ListRecipeVariantProps) => ListRecipeVariantProps;
}

export declare const listRecipe: ListRecipeRecipe;
