/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface SeparatorRecipeVariant {
	orientation: "horizontal" | "vertical";
	/**
	 * @default "xs"
	 */
	size: "xs" | "sm" | "md" | "lg" | "xl";
	/**
	 * @default "primary"
	 */
	variant: "primary" | "secondary" | "tertiary" | "ghost";
}

type SeparatorRecipeVariantMap = {
	[key in keyof SeparatorRecipeVariant]: Array<SeparatorRecipeVariant[key]>;
};

export type SeparatorRecipeVariantProps = {
	[key in keyof SeparatorRecipeVariant]?:
		| ConditionalValue<SeparatorRecipeVariant[key]>
		| undefined;
};

export interface SeparatorRecipeRecipe {
	__type: SeparatorRecipeVariantProps;
	(props?: SeparatorRecipeVariantProps): string;
	raw: (props?: SeparatorRecipeVariantProps) => SeparatorRecipeVariantProps;
	variantMap: SeparatorRecipeVariantMap;
	variantKeys: Array<keyof SeparatorRecipeVariant>;
	splitVariantProps<Props extends SeparatorRecipeVariantProps>(
		props: Props,
	): [
		SeparatorRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof SeparatorRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: SeparatorRecipeVariantProps,
	) => SeparatorRecipeVariantProps;
}

export declare const separatorRecipe: SeparatorRecipeRecipe;
