/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface DataListRecipeVariant {
	/**
	 * @default "vertical"
	 */
	orientation: "horizontal" | "vertical";
}

type DataListRecipeVariantMap = {
	[key in keyof DataListRecipeVariant]: Array<DataListRecipeVariant[key]>;
};

type DataListRecipeSlot = "root" | "item" | "itemLabel" | "itemValue";

export type DataListRecipeVariantProps = {
	[key in keyof DataListRecipeVariant]?:
		| ConditionalValue<DataListRecipeVariant[key]>
		| undefined;
};

export interface DataListRecipeRecipe {
	__slot: DataListRecipeSlot;
	__type: DataListRecipeVariantProps;
	(
		props?: DataListRecipeVariantProps,
	): Pretty<Record<DataListRecipeSlot, string>>;
	raw: (props?: DataListRecipeVariantProps) => DataListRecipeVariantProps;
	variantMap: DataListRecipeVariantMap;
	variantKeys: Array<keyof DataListRecipeVariant>;
	splitVariantProps<Props extends DataListRecipeVariantProps>(
		props: Props,
	): [
		DataListRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof DataListRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: DataListRecipeVariantProps,
	) => DataListRecipeVariantProps;
}

/**
 * Data list slot recipe
 */
export declare const dataListRecipe: DataListRecipeRecipe;
