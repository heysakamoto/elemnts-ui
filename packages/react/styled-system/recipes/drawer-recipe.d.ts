/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type DrawerRecipeVariant = {};

type DrawerRecipeVariantMap = {
	[key in keyof DrawerRecipeVariant]: Array<DrawerRecipeVariant[key]>;
};

type DrawerRecipeSlot =
	| "trigger"
	| "content"
	| "backdrop"
	| "positioner"
	| "grabber"
	| "title"
	| "indent"
	| "stack"
	| "swipeArea"
	| "indentBackground"
	| "closeTrigger"
	| "description"
	| "grabberIndicator";

export type DrawerRecipeVariantProps = {
	[key in keyof DrawerRecipeVariant]?:
		| ConditionalValue<DrawerRecipeVariant[key]>
		| undefined;
};

export interface DrawerRecipeRecipe {
	__slot: DrawerRecipeSlot;
	__type: DrawerRecipeVariantProps;
	(props?: DrawerRecipeVariantProps): Pretty<Record<DrawerRecipeSlot, string>>;
	raw: (props?: DrawerRecipeVariantProps) => DrawerRecipeVariantProps;
	variantMap: DrawerRecipeVariantMap;
	variantKeys: Array<keyof DrawerRecipeVariant>;
	splitVariantProps<Props extends DrawerRecipeVariantProps>(
		props: Props,
	): [
		DrawerRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof DrawerRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: DrawerRecipeVariantProps,
	) => DrawerRecipeVariantProps;
}

export declare const drawerRecipe: DrawerRecipeRecipe;
