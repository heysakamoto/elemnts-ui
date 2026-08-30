/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type PasswordInputRecipeVariant = {};

type PasswordInputRecipeVariantMap = {
	[key in keyof PasswordInputRecipeVariant]: Array<
		PasswordInputRecipeVariant[key]
	>;
};

type PasswordInputRecipeSlot =
	| "root"
	| "label"
	| "control"
	| "visibilityTrigger"
	| "indicator"
	| "input";

export type PasswordInputRecipeVariantProps = {
	[key in keyof PasswordInputRecipeVariant]?:
		| ConditionalValue<PasswordInputRecipeVariant[key]>
		| undefined;
};

export interface PasswordInputRecipeRecipe {
	__slot: PasswordInputRecipeSlot;
	__type: PasswordInputRecipeVariantProps;
	(
		props?: PasswordInputRecipeVariantProps,
	): Pretty<Record<PasswordInputRecipeSlot, string>>;
	raw: (
		props?: PasswordInputRecipeVariantProps,
	) => PasswordInputRecipeVariantProps;
	variantMap: PasswordInputRecipeVariantMap;
	variantKeys: Array<keyof PasswordInputRecipeVariant>;
	splitVariantProps<Props extends PasswordInputRecipeVariantProps>(
		props: Props,
	): [
		PasswordInputRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof PasswordInputRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: PasswordInputRecipeVariantProps,
	) => PasswordInputRecipeVariantProps;
}

export declare const passwordInputRecipe: PasswordInputRecipeRecipe;
