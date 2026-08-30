/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type SectionRecipeVariant = {};

type SectionRecipeVariantMap = {
	[key in keyof SectionRecipeVariant]: Array<SectionRecipeVariant[key]>;
};

export type SectionRecipeVariantProps = {
	[key in keyof SectionRecipeVariant]?:
		| ConditionalValue<SectionRecipeVariant[key]>
		| undefined;
};

export interface SectionRecipeRecipe {
	__type: SectionRecipeVariantProps;
	(props?: SectionRecipeVariantProps): string;
	raw: (props?: SectionRecipeVariantProps) => SectionRecipeVariantProps;
	variantMap: SectionRecipeVariantMap;
	variantKeys: Array<keyof SectionRecipeVariant>;
	splitVariantProps<Props extends SectionRecipeVariantProps>(
		props: Props,
	): [
		SectionRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof SectionRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: SectionRecipeVariantProps,
	) => SectionRecipeVariantProps;
}

export declare const sectionRecipe: SectionRecipeRecipe;
