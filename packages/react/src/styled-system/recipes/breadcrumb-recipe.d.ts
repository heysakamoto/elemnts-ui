/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type BreadcrumbRecipeVariant = {};

type BreadcrumbRecipeVariantMap = {
	[key in keyof BreadcrumbRecipeVariant]: Array<BreadcrumbRecipeVariant[key]>;
};

type BreadcrumbRecipeSlot =
	| "root"
	| "list"
	| "item"
	| "link"
	| "currentLink"
	| "separator"
	| "ellipsis";

export type BreadcrumbRecipeVariantProps = {
	[key in keyof BreadcrumbRecipeVariant]?:
		| ConditionalValue<BreadcrumbRecipeVariant[key]>
		| undefined;
};

export interface BreadcrumbRecipeRecipe {
	__slot: BreadcrumbRecipeSlot;
	__type: BreadcrumbRecipeVariantProps;
	(
		props?: BreadcrumbRecipeVariantProps,
	): Pretty<Record<BreadcrumbRecipeSlot, string>>;
	raw: (props?: BreadcrumbRecipeVariantProps) => BreadcrumbRecipeVariantProps;
	variantMap: BreadcrumbRecipeVariantMap;
	variantKeys: Array<keyof BreadcrumbRecipeVariant>;
	splitVariantProps<Props extends BreadcrumbRecipeVariantProps>(
		props: Props,
	): [
		BreadcrumbRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof BreadcrumbRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: BreadcrumbRecipeVariantProps,
	) => BreadcrumbRecipeVariantProps;
}

export declare const breadcrumbRecipe: BreadcrumbRecipeRecipe;
