/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type ClipboardRecipeVariant = {};

type ClipboardRecipeVariantMap = {
	[key in keyof ClipboardRecipeVariant]: Array<ClipboardRecipeVariant[key]>;
};

type ClipboardRecipeSlot =
	| "root"
	| "trigger"
	| "indicator"
	| "control"
	| "label"
	| "input"
	| "valueText";

export type ClipboardRecipeVariantProps = {
	[key in keyof ClipboardRecipeVariant]?:
		| ConditionalValue<ClipboardRecipeVariant[key]>
		| undefined;
};

export interface ClipboardRecipeRecipe {
	__slot: ClipboardRecipeSlot;
	__type: ClipboardRecipeVariantProps;
	(
		props?: ClipboardRecipeVariantProps,
	): Pretty<Record<ClipboardRecipeSlot, string>>;
	raw: (props?: ClipboardRecipeVariantProps) => ClipboardRecipeVariantProps;
	variantMap: ClipboardRecipeVariantMap;
	variantKeys: Array<keyof ClipboardRecipeVariant>;
	splitVariantProps<Props extends ClipboardRecipeVariantProps>(
		props: Props,
	): [
		ClipboardRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof ClipboardRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: ClipboardRecipeVariantProps,
	) => ClipboardRecipeVariantProps;
}

export declare const clipboardRecipe: ClipboardRecipeRecipe;
