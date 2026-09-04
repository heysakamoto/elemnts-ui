/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface MarkRecipeVariant {
	/**
	 * @default "primary"
	 */
	variant: "primary" | "secondary" | "tertiary" | "underline";
}

type MarkRecipeVariantMap = {
	[key in keyof MarkRecipeVariant]: Array<MarkRecipeVariant[key]>;
};

export type MarkRecipeVariantProps = {
	[key in keyof MarkRecipeVariant]?:
		| ConditionalValue<MarkRecipeVariant[key]>
		| undefined;
};

export interface MarkRecipeRecipe {
	__type: MarkRecipeVariantProps;
	(props?: MarkRecipeVariantProps): string;
	raw: (props?: MarkRecipeVariantProps) => MarkRecipeVariantProps;
	variantMap: MarkRecipeVariantMap;
	variantKeys: Array<keyof MarkRecipeVariant>;
	splitVariantProps<Props extends MarkRecipeVariantProps>(
		props: Props,
	): [
		MarkRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof MarkRecipeVariantProps>>,
	];
	getVariantProps: (props?: MarkRecipeVariantProps) => MarkRecipeVariantProps;
}

export declare const markRecipe: MarkRecipeRecipe;
