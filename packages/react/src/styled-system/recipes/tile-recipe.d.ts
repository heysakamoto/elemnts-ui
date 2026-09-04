/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface TileRecipeVariant {
	/**
	 * @default "horizontal"
	 */
	orientation: "horizontal" | "vertical";
	/**
	 * @default "md"
	 */
	size: "xs" | "sm" | "md" | "lg" | "xl";
	/**
	 * @default "primary"
	 */
	variant: "primary" | "secondary" | "tertiary" | "surface";
}

type TileRecipeVariantMap = {
	[key in keyof TileRecipeVariant]: Array<TileRecipeVariant[key]>;
};

type TileRecipeSlot =
	| "root"
	| "content"
	| "control"
	| "addon"
	| "title"
	| "description"
	| "indicator";

export type TileRecipeVariantProps = {
	[key in keyof TileRecipeVariant]?:
		| ConditionalValue<TileRecipeVariant[key]>
		| undefined;
};

export interface TileRecipeRecipe {
	__slot: TileRecipeSlot;
	__type: TileRecipeVariantProps;
	(props?: TileRecipeVariantProps): Pretty<Record<TileRecipeSlot, string>>;
	raw: (props?: TileRecipeVariantProps) => TileRecipeVariantProps;
	variantMap: TileRecipeVariantMap;
	variantKeys: Array<keyof TileRecipeVariant>;
	splitVariantProps<Props extends TileRecipeVariantProps>(
		props: Props,
	): [
		TileRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof TileRecipeVariantProps>>,
	];
	getVariantProps: (props?: TileRecipeVariantProps) => TileRecipeVariantProps;
}

export declare const tileRecipe: TileRecipeRecipe;
