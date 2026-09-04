/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type ColorPickerRecipeVariant = {};

type ColorPickerRecipeVariantMap = {
	[key in keyof ColorPickerRecipeVariant]: Array<ColorPickerRecipeVariant[key]>;
};

type ColorPickerRecipeSlot =
	| "root"
	| "trigger"
	| "content"
	| "control"
	| "label"
	| "area"
	| "positioner"
	| "areaThumb"
	| "valueText"
	| "areaBackground"
	| "channelSlider"
	| "channelSliderLabel"
	| "channelSliderTrack"
	| "channelSliderThumb"
	| "channelSliderValueText"
	| "channelInput"
	| "transparencyGrid"
	| "swatchGroup"
	| "swatchTrigger"
	| "swatchIndicator"
	| "swatch"
	| "eyeDropperTrigger"
	| "formatTrigger"
	| "formatSelect"
	| "view"
	| "channelSliderControl";

export type ColorPickerRecipeVariantProps = {
	[key in keyof ColorPickerRecipeVariant]?:
		| ConditionalValue<ColorPickerRecipeVariant[key]>
		| undefined;
};

export interface ColorPickerRecipeRecipe {
	__slot: ColorPickerRecipeSlot;
	__type: ColorPickerRecipeVariantProps;
	(
		props?: ColorPickerRecipeVariantProps,
	): Pretty<Record<ColorPickerRecipeSlot, string>>;
	raw: (props?: ColorPickerRecipeVariantProps) => ColorPickerRecipeVariantProps;
	variantMap: ColorPickerRecipeVariantMap;
	variantKeys: Array<keyof ColorPickerRecipeVariant>;
	splitVariantProps<Props extends ColorPickerRecipeVariantProps>(
		props: Props,
	): [
		ColorPickerRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof ColorPickerRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: ColorPickerRecipeVariantProps,
	) => ColorPickerRecipeVariantProps;
}

export declare const colorPickerRecipe: ColorPickerRecipeRecipe;
