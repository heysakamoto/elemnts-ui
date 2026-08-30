/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type TourRecipeVariant = {};

type TourRecipeVariantMap = {
	[key in keyof TourRecipeVariant]: Array<TourRecipeVariant[key]>;
};

type TourRecipeSlot =
	| "root"
	| "positioner"
	| "content"
	| "title"
	| "description"
	| "actionTrigger"
	| "closeTrigger"
	| "arrow"
	| "arrowTip"
	| "control"
	| "backdrop"
	| "progressText"
	| "spotlight";

export type TourRecipeVariantProps = {
	[key in keyof TourRecipeVariant]?:
		| ConditionalValue<TourRecipeVariant[key]>
		| undefined;
};

export interface TourRecipeRecipe {
	__slot: TourRecipeSlot;
	__type: TourRecipeVariantProps;
	(props?: TourRecipeVariantProps): Pretty<Record<TourRecipeSlot, string>>;
	raw: (props?: TourRecipeVariantProps) => TourRecipeVariantProps;
	variantMap: TourRecipeVariantMap;
	variantKeys: Array<keyof TourRecipeVariant>;
	splitVariantProps<Props extends TourRecipeVariantProps>(
		props: Props,
	): [
		TourRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof TourRecipeVariantProps>>,
	];
	getVariantProps: (props?: TourRecipeVariantProps) => TourRecipeVariantProps;
}

export declare const tourRecipe: TourRecipeRecipe;
