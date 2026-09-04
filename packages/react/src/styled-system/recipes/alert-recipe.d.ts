/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface AlertRecipeVariant {
	/**
	 * @default "info"
	 */
	status: "default" | "info" | "destructive" | "success" | "warning";
	/**
	 * @default "secondary"
	 */
	variant: "primary" | "secondary" | "tertiary" | "surface";
}

type AlertRecipeVariantMap = {
	[key in keyof AlertRecipeVariant]: Array<AlertRecipeVariant[key]>;
};

type AlertRecipeSlot =
	| "root"
	| "content"
	| "title"
	| "description"
	| "indicator"
	| "control";

export type AlertRecipeVariantProps = {
	[key in keyof AlertRecipeVariant]?:
		| ConditionalValue<AlertRecipeVariant[key]>
		| undefined;
};

export interface AlertRecipeRecipe {
	__slot: AlertRecipeSlot;
	__type: AlertRecipeVariantProps;
	(props?: AlertRecipeVariantProps): Pretty<Record<AlertRecipeSlot, string>>;
	raw: (props?: AlertRecipeVariantProps) => AlertRecipeVariantProps;
	variantMap: AlertRecipeVariantMap;
	variantKeys: Array<keyof AlertRecipeVariant>;
	splitVariantProps<Props extends AlertRecipeVariantProps>(
		props: Props,
	): [
		AlertRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof AlertRecipeVariantProps>>,
	];
	getVariantProps: (props?: AlertRecipeVariantProps) => AlertRecipeVariantProps;
}

export declare const alertRecipe: AlertRecipeRecipe;
