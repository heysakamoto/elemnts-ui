/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type SignaturePadRecipeVariant = {};

type SignaturePadRecipeVariantMap = {
	[key in keyof SignaturePadRecipeVariant]: Array<
		SignaturePadRecipeVariant[key]
	>;
};

type SignaturePadRecipeSlot =
	| "root"
	| "control"
	| "label"
	| "clearTrigger"
	| "segment"
	| "segmentPath"
	| "guide";

export type SignaturePadRecipeVariantProps = {
	[key in keyof SignaturePadRecipeVariant]?:
		| ConditionalValue<SignaturePadRecipeVariant[key]>
		| undefined;
};

export interface SignaturePadRecipeRecipe {
	__slot: SignaturePadRecipeSlot;
	__type: SignaturePadRecipeVariantProps;
	(
		props?: SignaturePadRecipeVariantProps,
	): Pretty<Record<SignaturePadRecipeSlot, string>>;
	raw: (
		props?: SignaturePadRecipeVariantProps,
	) => SignaturePadRecipeVariantProps;
	variantMap: SignaturePadRecipeVariantMap;
	variantKeys: Array<keyof SignaturePadRecipeVariant>;
	splitVariantProps<Props extends SignaturePadRecipeVariantProps>(
		props: Props,
	): [
		SignaturePadRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof SignaturePadRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: SignaturePadRecipeVariantProps,
	) => SignaturePadRecipeVariantProps;
}

export declare const signaturePadRecipe: SignaturePadRecipeRecipe;
