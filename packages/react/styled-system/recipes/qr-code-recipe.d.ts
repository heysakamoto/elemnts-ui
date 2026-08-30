/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type QrCodeRecipeVariant = {};

type QrCodeRecipeVariantMap = {
	[key in keyof QrCodeRecipeVariant]: Array<QrCodeRecipeVariant[key]>;
};

type QrCodeRecipeSlot =
	| "root"
	| "overlay"
	| "frame"
	| "pattern"
	| "downloadTrigger";

export type QrCodeRecipeVariantProps = {
	[key in keyof QrCodeRecipeVariant]?:
		| ConditionalValue<QrCodeRecipeVariant[key]>
		| undefined;
};

export interface QrCodeRecipeRecipe {
	__slot: QrCodeRecipeSlot;
	__type: QrCodeRecipeVariantProps;
	(props?: QrCodeRecipeVariantProps): Pretty<Record<QrCodeRecipeSlot, string>>;
	raw: (props?: QrCodeRecipeVariantProps) => QrCodeRecipeVariantProps;
	variantMap: QrCodeRecipeVariantMap;
	variantKeys: Array<keyof QrCodeRecipeVariant>;
	splitVariantProps<Props extends QrCodeRecipeVariantProps>(
		props: Props,
	): [
		QrCodeRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof QrCodeRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: QrCodeRecipeVariantProps,
	) => QrCodeRecipeVariantProps;
}

export declare const qrCodeRecipe: QrCodeRecipeRecipe;
