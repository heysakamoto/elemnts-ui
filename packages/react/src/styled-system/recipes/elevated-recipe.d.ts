/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface ElevatedRecipeVariant {
	/**
	 * @default true
	 */
	withBorder: boolean;
}

type ElevatedRecipeVariantMap = {
	[key in keyof ElevatedRecipeVariant]: Array<ElevatedRecipeVariant[key]>;
};

export type ElevatedRecipeVariantProps = {
	[key in keyof ElevatedRecipeVariant]?:
		| ConditionalValue<ElevatedRecipeVariant[key]>
		| undefined;
};

export interface ElevatedRecipeRecipe {
	__type: ElevatedRecipeVariantProps;
	(props?: ElevatedRecipeVariantProps): string;
	raw: (props?: ElevatedRecipeVariantProps) => ElevatedRecipeVariantProps;
	variantMap: ElevatedRecipeVariantMap;
	variantKeys: Array<keyof ElevatedRecipeVariant>;
	splitVariantProps<Props extends ElevatedRecipeVariantProps>(
		props: Props,
	): [
		ElevatedRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof ElevatedRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: ElevatedRecipeVariantProps,
	) => ElevatedRecipeVariantProps;
}

/**
 * Raises the elevation level of its children by a given `offset`
 */
export declare const elevatedRecipe: ElevatedRecipeRecipe;
