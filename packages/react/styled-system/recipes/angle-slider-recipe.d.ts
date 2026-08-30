/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type AngleSliderRecipeVariant = {};

type AngleSliderRecipeVariantMap = {
	[key in keyof AngleSliderRecipeVariant]: Array<AngleSliderRecipeVariant[key]>;
};

type AngleSliderRecipeSlot =
	| "root"
	| "control"
	| "label"
	| "marker"
	| "markerGroup"
	| "thumb"
	| "valueText";

export type AngleSliderRecipeVariantProps = {
	[key in keyof AngleSliderRecipeVariant]?:
		| ConditionalValue<AngleSliderRecipeVariant[key]>
		| undefined;
};

export interface AngleSliderRecipeRecipe {
	__slot: AngleSliderRecipeSlot;
	__type: AngleSliderRecipeVariantProps;
	(
		props?: AngleSliderRecipeVariantProps,
	): Pretty<Record<AngleSliderRecipeSlot, string>>;
	raw: (props?: AngleSliderRecipeVariantProps) => AngleSliderRecipeVariantProps;
	variantMap: AngleSliderRecipeVariantMap;
	variantKeys: Array<keyof AngleSliderRecipeVariant>;
	splitVariantProps<Props extends AngleSliderRecipeVariantProps>(
		props: Props,
	): [
		AngleSliderRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof AngleSliderRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: AngleSliderRecipeVariantProps,
	) => AngleSliderRecipeVariantProps;
}

export declare const angleSliderRecipe: AngleSliderRecipeRecipe;
