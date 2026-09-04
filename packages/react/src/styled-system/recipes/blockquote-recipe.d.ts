/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type BlockquoteRecipeVariant = {};

type BlockquoteRecipeVariantMap = {
	[key in keyof BlockquoteRecipeVariant]: Array<BlockquoteRecipeVariant[key]>;
};

type BlockquoteRecipeSlot =
	| "root"
	| "cite"
	| "caption"
	| "indicator"
	| "content";

export type BlockquoteRecipeVariantProps = {
	[key in keyof BlockquoteRecipeVariant]?:
		| ConditionalValue<BlockquoteRecipeVariant[key]>
		| undefined;
};

export interface BlockquoteRecipeRecipe {
	__slot: BlockquoteRecipeSlot;
	__type: BlockquoteRecipeVariantProps;
	(
		props?: BlockquoteRecipeVariantProps,
	): Pretty<Record<BlockquoteRecipeSlot, string>>;
	raw: (props?: BlockquoteRecipeVariantProps) => BlockquoteRecipeVariantProps;
	variantMap: BlockquoteRecipeVariantMap;
	variantKeys: Array<keyof BlockquoteRecipeVariant>;
	splitVariantProps<Props extends BlockquoteRecipeVariantProps>(
		props: Props,
	): [
		BlockquoteRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof BlockquoteRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: BlockquoteRecipeVariantProps,
	) => BlockquoteRecipeVariantProps;
}

export declare const blockquoteRecipe: BlockquoteRecipeRecipe;
