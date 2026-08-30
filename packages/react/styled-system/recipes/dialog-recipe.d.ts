/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface DialogRecipeVariant {
	/**
	 * @default "md"
	 */
	size: "xs" | "sm" | "md" | "lg" | "xl" | "cover" | "full";
	/**
	 * @default "center"
	 */
	placement: "top" | "center" | "bottom";
}

type DialogRecipeVariantMap = {
	[key in keyof DialogRecipeVariant]: Array<DialogRecipeVariant[key]>;
};

type DialogRecipeSlot =
	| "content"
	| "trigger"
	| "title"
	| "description"
	| "backdrop"
	| "positioner"
	| "closeTrigger";

export type DialogRecipeVariantProps = {
	[key in keyof DialogRecipeVariant]?:
		| ConditionalValue<DialogRecipeVariant[key]>
		| undefined;
};

export interface DialogRecipeRecipe {
	__slot: DialogRecipeSlot;
	__type: DialogRecipeVariantProps;
	(props?: DialogRecipeVariantProps): Pretty<Record<DialogRecipeSlot, string>>;
	raw: (props?: DialogRecipeVariantProps) => DialogRecipeVariantProps;
	variantMap: DialogRecipeVariantMap;
	variantKeys: Array<keyof DialogRecipeVariant>;
	splitVariantProps<Props extends DialogRecipeVariantProps>(
		props: Props,
	): [
		DialogRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof DialogRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: DialogRecipeVariantProps,
	) => DialogRecipeVariantProps;
}

export declare const dialogRecipe: DialogRecipeRecipe;
