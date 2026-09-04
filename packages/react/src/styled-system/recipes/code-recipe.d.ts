/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface CodeRecipeVariant {
	/**
	 * @default "md"
	 */
	size: "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
	/**
	 * @default "primary"
	 */
	variant: "primary" | "secondary" | "tertiary" | "ghost" | "surface";
	/**
	 * @default false
	 */
	iconOnly: boolean;
}

type CodeRecipeVariantMap = {
	[key in keyof CodeRecipeVariant]: Array<CodeRecipeVariant[key]>;
};

export type CodeRecipeVariantProps = {
	[key in keyof CodeRecipeVariant]?:
		| ConditionalValue<CodeRecipeVariant[key]>
		| undefined;
};

export interface CodeRecipeRecipe {
	__type: CodeRecipeVariantProps;
	(props?: CodeRecipeVariantProps): string;
	raw: (props?: CodeRecipeVariantProps) => CodeRecipeVariantProps;
	variantMap: CodeRecipeVariantMap;
	variantKeys: Array<keyof CodeRecipeVariant>;
	splitVariantProps<Props extends CodeRecipeVariantProps>(
		props: Props,
	): [
		CodeRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof CodeRecipeVariantProps>>,
	];
	getVariantProps: (props?: CodeRecipeVariantProps) => CodeRecipeVariantProps;
}

export declare const codeRecipe: CodeRecipeRecipe;
