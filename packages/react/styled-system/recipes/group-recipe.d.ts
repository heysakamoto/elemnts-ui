/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface GroupRecipeVariant {
	/**
	 * @default false
	 */
	fullWidth: boolean;
	/**
	 * @default false
	 */
	attached: boolean;
	/**
	 * @default "horizontal"
	 */
	orientation: "horizontal" | "vertical";
}

type GroupRecipeVariantMap = {
	[key in keyof GroupRecipeVariant]: Array<GroupRecipeVariant[key]>;
};

export type GroupRecipeVariantProps = {
	[key in keyof GroupRecipeVariant]?: GroupRecipeVariant[key] | undefined;
};

export interface GroupRecipeRecipe {
	__type: GroupRecipeVariantProps;
	(props?: GroupRecipeVariantProps): string;
	raw: (props?: GroupRecipeVariantProps) => GroupRecipeVariantProps;
	variantMap: GroupRecipeVariantMap;
	variantKeys: Array<keyof GroupRecipeVariant>;
	splitVariantProps<Props extends GroupRecipeVariantProps>(
		props: Props,
	): [
		GroupRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof GroupRecipeVariantProps>>,
	];
	getVariantProps: (props?: GroupRecipeVariantProps) => GroupRecipeVariantProps;
}

/**
 * A container for grouping related components
 */
export declare const groupRecipe: GroupRecipeRecipe;
