/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type SplitterRecipeVariant = {};

type SplitterRecipeVariantMap = {
	[key in keyof SplitterRecipeVariant]: Array<SplitterRecipeVariant[key]>;
};

type SplitterRecipeSlot =
	| "root"
	| "panel"
	| "resizeTrigger"
	| "resizeTriggerIndicator";

export type SplitterRecipeVariantProps = {
	[key in keyof SplitterRecipeVariant]?:
		| ConditionalValue<SplitterRecipeVariant[key]>
		| undefined;
};

export interface SplitterRecipeRecipe {
	__slot: SplitterRecipeSlot;
	__type: SplitterRecipeVariantProps;
	(
		props?: SplitterRecipeVariantProps,
	): Pretty<Record<SplitterRecipeSlot, string>>;
	raw: (props?: SplitterRecipeVariantProps) => SplitterRecipeVariantProps;
	variantMap: SplitterRecipeVariantMap;
	variantKeys: Array<keyof SplitterRecipeVariant>;
	splitVariantProps<Props extends SplitterRecipeVariantProps>(
		props: Props,
	): [
		SplitterRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof SplitterRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: SplitterRecipeVariantProps,
	) => SplitterRecipeVariantProps;
}

export declare const splitterRecipe: SplitterRecipeRecipe;
