/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

interface SliderRecipeVariant {
	/**
	 * @default "md"
	 */
	size: "xs" | "sm" | "md" | "lg" | "xl";
}

type SliderRecipeVariantMap = {
	[key in keyof SliderRecipeVariant]: Array<SliderRecipeVariant[key]>;
};

type SliderRecipeSlot =
	| "root"
	| "control"
	| "label"
	| "step"
	| "marker"
	| "range"
	| "thumb"
	| "valueText"
	| "track"
	| "markerGroup"
	| "stepGroup";

export type SliderRecipeVariantProps = {
	[key in keyof SliderRecipeVariant]?:
		| ConditionalValue<SliderRecipeVariant[key]>
		| undefined;
};

export interface SliderRecipeRecipe {
	__slot: SliderRecipeSlot;
	__type: SliderRecipeVariantProps;
	(props?: SliderRecipeVariantProps): Pretty<Record<SliderRecipeSlot, string>>;
	raw: (props?: SliderRecipeVariantProps) => SliderRecipeVariantProps;
	variantMap: SliderRecipeVariantMap;
	variantKeys: Array<keyof SliderRecipeVariant>;
	splitVariantProps<Props extends SliderRecipeVariantProps>(
		props: Props,
	): [
		SliderRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof SliderRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: SliderRecipeVariantProps,
	) => SliderRecipeVariantProps;
}

export declare const sliderRecipe: SliderRecipeRecipe;
