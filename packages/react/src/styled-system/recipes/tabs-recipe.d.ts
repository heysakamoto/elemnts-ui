/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface TabsRecipeVariant {
	/**
	 * @default "md"
	 */
	size: "xs" | "sm" | "md" | "lg" | "xl";
	/**
	 * @default "primary"
	 */
	variant: "primary" | "secondary" | "tertiary";
}

type TabsRecipeVariantMap = {
	[key in keyof TabsRecipeVariant]: Array<TabsRecipeVariant[key]>;
};

type TabsRecipeSlot =
	| "root"
	| "content"
	| "list"
	| "trigger"
	| "indicator"
	| "panel";

export type TabsRecipeVariantProps = {
	[key in keyof TabsRecipeVariant]?:
		| ConditionalValue<TabsRecipeVariant[key]>
		| undefined;
};

export interface TabsRecipeRecipe {
	__slot: TabsRecipeSlot;
	__type: TabsRecipeVariantProps;
	(props?: TabsRecipeVariantProps): Pretty<Record<TabsRecipeSlot, string>>;
	raw: (props?: TabsRecipeVariantProps) => TabsRecipeVariantProps;
	variantMap: TabsRecipeVariantMap;
	variantKeys: Array<keyof TabsRecipeVariant>;
	splitVariantProps<Props extends TabsRecipeVariantProps>(
		props: Props,
	): [
		TabsRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof TabsRecipeVariantProps>>,
	];
	getVariantProps: (props?: TabsRecipeVariantProps) => TabsRecipeVariantProps;
}

export declare const tabsRecipe: TabsRecipeRecipe;
