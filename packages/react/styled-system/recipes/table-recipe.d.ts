/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface TableRecipeVariant {
	interactive: boolean;
	pinnedHeader: boolean;
	alternatingRows: boolean;
	showColumnDividers: boolean;
	/**
	 * @default "primary"
	 */
	variant: "primary" | "secondary";
	/**
	 * @default "md"
	 */
	size: "xs" | "sm" | "md" | "lg" | "xl";
}

type TableRecipeVariantMap = {
	[key in keyof TableRecipeVariant]: Array<TableRecipeVariant[key]>;
};

type TableRecipeSlot =
	| "row"
	| "root"
	| "cell"
	| "body"
	| "header"
	| "footer"
	| "caption"
	| "columnHeader"
	| "columnGroup";

export type TableRecipeVariantProps = {
	[key in keyof TableRecipeVariant]?:
		| ConditionalValue<TableRecipeVariant[key]>
		| undefined;
};

export interface TableRecipeRecipe {
	__slot: TableRecipeSlot;
	__type: TableRecipeVariantProps;
	(props?: TableRecipeVariantProps): Pretty<Record<TableRecipeSlot, string>>;
	raw: (props?: TableRecipeVariantProps) => TableRecipeVariantProps;
	variantMap: TableRecipeVariantMap;
	variantKeys: Array<keyof TableRecipeVariant>;
	splitVariantProps<Props extends TableRecipeVariantProps>(
		props: Props,
	): [
		TableRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof TableRecipeVariantProps>>,
	];
	getVariantProps: (props?: TableRecipeVariantProps) => TableRecipeVariantProps;
}

export declare const tableRecipe: TableRecipeRecipe;
