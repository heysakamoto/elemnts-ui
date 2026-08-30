/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface GridRecipeVariant {
	/**
	 * @default false
	 */
	inline: boolean;
}

type GridRecipeVariantMap = {
	[key in keyof GridRecipeVariant]: Array<GridRecipeVariant[key]>;
};

export type GridRecipeVariantProps = {
	[key in keyof GridRecipeVariant]?:
		| ConditionalValue<GridRecipeVariant[key]>
		| undefined;
};

export interface GridRecipeRecipe {
	__type: GridRecipeVariantProps;
	(props?: GridRecipeVariantProps): string;
	raw: (props?: GridRecipeVariantProps) => GridRecipeVariantProps;
	variantMap: GridRecipeVariantMap;
	variantKeys: Array<keyof GridRecipeVariant>;
	splitVariantProps<Props extends GridRecipeVariantProps>(
		props: Props,
	): [
		GridRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof GridRecipeVariantProps>>,
	];
	getVariantProps: (props?: GridRecipeVariantProps) => GridRecipeVariantProps;
}

export declare const gridRecipe: GridRecipeRecipe;
