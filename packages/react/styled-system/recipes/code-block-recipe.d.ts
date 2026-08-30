/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type CodeBlockRecipeVariant = {};

type CodeBlockRecipeVariantMap = {
	[key in keyof CodeBlockRecipeVariant]: Array<CodeBlockRecipeVariant[key]>;
};

type CodeBlockRecipeSlot =
	| "root"
	| "header"
	| "title"
	| "control"
	| "copyTrigger"
	| "collaspseTrigger"
	| "content"
	| "code"
	| "codeText";

export type CodeBlockRecipeVariantProps = {
	[key in keyof CodeBlockRecipeVariant]?:
		| ConditionalValue<CodeBlockRecipeVariant[key]>
		| undefined;
};

export interface CodeBlockRecipeRecipe {
	__slot: CodeBlockRecipeSlot;
	__type: CodeBlockRecipeVariantProps;
	(
		props?: CodeBlockRecipeVariantProps,
	): Pretty<Record<CodeBlockRecipeSlot, string>>;
	raw: (props?: CodeBlockRecipeVariantProps) => CodeBlockRecipeVariantProps;
	variantMap: CodeBlockRecipeVariantMap;
	variantKeys: Array<keyof CodeBlockRecipeVariant>;
	splitVariantProps<Props extends CodeBlockRecipeVariantProps>(
		props: Props,
	): [
		CodeBlockRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof CodeBlockRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: CodeBlockRecipeVariantProps,
	) => CodeBlockRecipeVariantProps;
}

export declare const codeBlockRecipe: CodeBlockRecipeRecipe;
