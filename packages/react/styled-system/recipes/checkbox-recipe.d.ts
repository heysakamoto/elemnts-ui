/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface CheckboxRecipeVariant {
	/**
	 * @default "md"
	 */
	size: "xs" | "sm" | "md" | "lg" | "xl";
	/**
	 * @default "primary"
	 */
	variant: "primary" | "secondary" | "tertiary" | "ghost";
}

type CheckboxRecipeVariantMap = {
	[key in keyof CheckboxRecipeVariant]: Array<CheckboxRecipeVariant[key]>;
};

type CheckboxRecipeSlot = "root" | "indicator" | "control" | "label" | "group";

export type CheckboxRecipeVariantProps = {
	[key in keyof CheckboxRecipeVariant]?:
		| ConditionalValue<CheckboxRecipeVariant[key]>
		| undefined;
};

export interface CheckboxRecipeRecipe {
	__slot: CheckboxRecipeSlot;
	__type: CheckboxRecipeVariantProps;
	(
		props?: CheckboxRecipeVariantProps,
	): Pretty<Record<CheckboxRecipeSlot, string>>;
	raw: (props?: CheckboxRecipeVariantProps) => CheckboxRecipeVariantProps;
	variantMap: CheckboxRecipeVariantMap;
	variantKeys: Array<keyof CheckboxRecipeVariant>;
	splitVariantProps<Props extends CheckboxRecipeVariantProps>(
		props: Props,
	): [
		CheckboxRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof CheckboxRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: CheckboxRecipeVariantProps,
	) => CheckboxRecipeVariantProps;
}

export declare const checkboxRecipe: CheckboxRecipeRecipe;
