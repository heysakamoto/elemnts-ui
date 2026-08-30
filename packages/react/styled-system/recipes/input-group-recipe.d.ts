/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface InputGroupRecipeVariant {
	/**
	 * @default "md"
	 */
	size: "xs" | "sm" | "md" | "lg" | "xl";
	/**
	 * @default "primary"
	 */
	variant: "primary" | "secondary" | "tertiary";
}

type InputGroupRecipeVariantMap = {
	[key in keyof InputGroupRecipeVariant]: Array<InputGroupRecipeVariant[key]>;
};

type InputGroupRecipeSlot = "textarea" | "root" | "addon" | "input";

export type InputGroupRecipeVariantProps = {
	[key in keyof InputGroupRecipeVariant]?:
		| ConditionalValue<InputGroupRecipeVariant[key]>
		| undefined;
};

export interface InputGroupRecipeRecipe {
	__slot: InputGroupRecipeSlot;
	__type: InputGroupRecipeVariantProps;
	(
		props?: InputGroupRecipeVariantProps,
	): Pretty<Record<InputGroupRecipeSlot, string>>;
	raw: (props?: InputGroupRecipeVariantProps) => InputGroupRecipeVariantProps;
	variantMap: InputGroupRecipeVariantMap;
	variantKeys: Array<keyof InputGroupRecipeVariant>;
	splitVariantProps<Props extends InputGroupRecipeVariantProps>(
		props: Props,
	): [
		InputGroupRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof InputGroupRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: InputGroupRecipeVariantProps,
	) => InputGroupRecipeVariantProps;
}

export declare const inputGroupRecipe: InputGroupRecipeRecipe;
