/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type StatRecipeVariant = {};

type StatRecipeVariantMap = {
	[key in keyof StatRecipeVariant]: Array<StatRecipeVariant[key]>;
};

type StatRecipeSlot =
	| "root"
	| "label"
	| "valueText"
	| "helpText"
	| "valueUnit"
	| "indicator";

export type StatRecipeVariantProps = {
	[key in keyof StatRecipeVariant]?:
		| ConditionalValue<StatRecipeVariant[key]>
		| undefined;
};

export interface StatRecipeRecipe {
	__slot: StatRecipeSlot;
	__type: StatRecipeVariantProps;
	(props?: StatRecipeVariantProps): Pretty<Record<StatRecipeSlot, string>>;
	raw: (props?: StatRecipeVariantProps) => StatRecipeVariantProps;
	variantMap: StatRecipeVariantMap;
	variantKeys: Array<keyof StatRecipeVariant>;
	splitVariantProps<Props extends StatRecipeVariantProps>(
		props: Props,
	): [
		StatRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof StatRecipeVariantProps>>,
	];
	getVariantProps: (props?: StatRecipeVariantProps) => StatRecipeVariantProps;
}

/**
 * Stat slot recipe
 */
export declare const statRecipe: StatRecipeRecipe;
