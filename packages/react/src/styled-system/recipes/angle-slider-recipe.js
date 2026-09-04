import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const angleSliderRecipeDefaultVariants = {};
const angleSliderRecipeCompoundVariants = [];

const angleSliderRecipeSlotNames = [
	["root", "angle-slider__root"],
	["control", "angle-slider__control"],
	["label", "angle-slider__label"],
	["marker", "angle-slider__marker"],
	["markerGroup", "angle-slider__markerGroup"],
	["thumb", "angle-slider__thumb"],
	["valueText", "angle-slider__valueText"],
];
const angleSliderRecipeSlotFns = /* @__PURE__ */ angleSliderRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			angleSliderRecipeDefaultVariants,
			getSlotCompoundVariant(angleSliderRecipeCompoundVariants, slotName),
		),
	],
);

const angleSliderRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		angleSliderRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const angleSliderRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...angleSliderRecipeDefaultVariants,
	...compact(variants),
});

export const angleSliderRecipe = /* @__PURE__ */ Object.assign(
	angleSliderRecipeFn,
	{
		__recipe__: false,
		__name__: "angleSliderRecipe",
		raw: (props) => props,
		classNameMap: {},
		variantKeys: angleSliderRecipeVariantKeys,
		variantMap: {},
		splitVariantProps(props) {
			return splitProps(props, angleSliderRecipeVariantKeys);
		},
		getVariantProps,
	},
);
