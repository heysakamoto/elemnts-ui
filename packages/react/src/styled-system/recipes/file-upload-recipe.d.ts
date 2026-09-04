/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type FileUploadRecipeVariant = {};

type FileUploadRecipeVariantMap = {
	[key in keyof FileUploadRecipeVariant]: Array<FileUploadRecipeVariant[key]>;
};

type FileUploadRecipeSlot =
	| "root"
	| "trigger"
	| "dropzone"
	| "item"
	| "itemDeleteTrigger"
	| "itemGroup"
	| "itemName"
	| "itemPreview"
	| "itemPreviewImage"
	| "itemSizeText"
	| "label"
	| "clearTrigger";

export type FileUploadRecipeVariantProps = {
	[key in keyof FileUploadRecipeVariant]?:
		| ConditionalValue<FileUploadRecipeVariant[key]>
		| undefined;
};

export interface FileUploadRecipeRecipe {
	__slot: FileUploadRecipeSlot;
	__type: FileUploadRecipeVariantProps;
	(
		props?: FileUploadRecipeVariantProps,
	): Pretty<Record<FileUploadRecipeSlot, string>>;
	raw: (props?: FileUploadRecipeVariantProps) => FileUploadRecipeVariantProps;
	variantMap: FileUploadRecipeVariantMap;
	variantKeys: Array<keyof FileUploadRecipeVariant>;
	splitVariantProps<Props extends FileUploadRecipeVariantProps>(
		props: Props,
	): [
		FileUploadRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof FileUploadRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: FileUploadRecipeVariantProps,
	) => FileUploadRecipeVariantProps;
}

export declare const fileUploadRecipe: FileUploadRecipeRecipe;
