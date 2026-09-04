/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type FocusTrapRecipeVariant = {};

type FocusTrapRecipeVariantMap = {
	[key in keyof FocusTrapRecipeVariant]: Array<FocusTrapRecipeVariant[key]>;
};

export type FocusTrapRecipeVariantProps = {
	[key in keyof FocusTrapRecipeVariant]?:
		| ConditionalValue<FocusTrapRecipeVariant[key]>
		| undefined;
};

export interface FocusTrapRecipeRecipe {
	__type: FocusTrapRecipeVariantProps;
	(props?: FocusTrapRecipeVariantProps): string;
	raw: (props?: FocusTrapRecipeVariantProps) => FocusTrapRecipeVariantProps;
	variantMap: FocusTrapRecipeVariantMap;
	variantKeys: Array<keyof FocusTrapRecipeVariant>;
	splitVariantProps<Props extends FocusTrapRecipeVariantProps>(
		props: Props,
	): [
		FocusTrapRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof FocusTrapRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: FocusTrapRecipeVariantProps,
	) => FocusTrapRecipeVariantProps;
}

export declare const focusTrapRecipe: FocusTrapRecipeRecipe;
