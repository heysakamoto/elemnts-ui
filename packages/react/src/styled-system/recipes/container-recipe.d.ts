/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface ContainerRecipeVariant {
	/**
	 * @default false
	 */
	fluid: boolean;
}

type ContainerRecipeVariantMap = {
	[key in keyof ContainerRecipeVariant]: Array<ContainerRecipeVariant[key]>;
};

export type ContainerRecipeVariantProps = {
	[key in keyof ContainerRecipeVariant]?:
		| ConditionalValue<ContainerRecipeVariant[key]>
		| undefined;
};

export interface ContainerRecipeRecipe {
	__type: ContainerRecipeVariantProps;
	(props?: ContainerRecipeVariantProps): string;
	raw: (props?: ContainerRecipeVariantProps) => ContainerRecipeVariantProps;
	variantMap: ContainerRecipeVariantMap;
	variantKeys: Array<keyof ContainerRecipeVariant>;
	splitVariantProps<Props extends ContainerRecipeVariantProps>(
		props: Props,
	): [
		ContainerRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof ContainerRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: ContainerRecipeVariantProps,
	) => ContainerRecipeVariantProps;
}

export declare const containerRecipe: ContainerRecipeRecipe;
