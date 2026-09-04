/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface StatusRecipeVariant {
	/**
	 * @default "md"
	 */
	size: "xs" | "sm" | "md" | "lg" | "xl";
}

type StatusRecipeVariantMap = {
	[key in keyof StatusRecipeVariant]: Array<StatusRecipeVariant[key]>;
};

type StatusRecipeSlot = "root" | "indicator" | "text";

export type StatusRecipeVariantProps = {
	[key in keyof StatusRecipeVariant]?:
		| ConditionalValue<StatusRecipeVariant[key]>
		| undefined;
};

export interface StatusRecipeRecipe {
	__slot: StatusRecipeSlot;
	__type: StatusRecipeVariantProps;
	(props?: StatusRecipeVariantProps): Pretty<Record<StatusRecipeSlot, string>>;
	raw: (props?: StatusRecipeVariantProps) => StatusRecipeVariantProps;
	variantMap: StatusRecipeVariantMap;
	variantKeys: Array<keyof StatusRecipeVariant>;
	splitVariantProps<Props extends StatusRecipeVariantProps>(
		props: Props,
	): [
		StatusRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof StatusRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: StatusRecipeVariantProps,
	) => StatusRecipeVariantProps;
}

export declare const statusRecipe: StatusRecipeRecipe;
