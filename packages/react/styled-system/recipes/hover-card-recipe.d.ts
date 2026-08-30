/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type HoverCardRecipeVariant = {};

type HoverCardRecipeVariantMap = {
	[key in keyof HoverCardRecipeVariant]: Array<HoverCardRecipeVariant[key]>;
};

type HoverCardRecipeSlot =
	| "trigger"
	| "content"
	| "positioner"
	| "arrow"
	| "arrowTip";

export type HoverCardRecipeVariantProps = {
	[key in keyof HoverCardRecipeVariant]?:
		| ConditionalValue<HoverCardRecipeVariant[key]>
		| undefined;
};

export interface HoverCardRecipeRecipe {
	__slot: HoverCardRecipeSlot;
	__type: HoverCardRecipeVariantProps;
	(
		props?: HoverCardRecipeVariantProps,
	): Pretty<Record<HoverCardRecipeSlot, string>>;
	raw: (props?: HoverCardRecipeVariantProps) => HoverCardRecipeVariantProps;
	variantMap: HoverCardRecipeVariantMap;
	variantKeys: Array<keyof HoverCardRecipeVariant>;
	splitVariantProps<Props extends HoverCardRecipeVariantProps>(
		props: Props,
	): [
		HoverCardRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof HoverCardRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: HoverCardRecipeVariantProps,
	) => HoverCardRecipeVariantProps;
}

export declare const hoverCardRecipe: HoverCardRecipeRecipe;
