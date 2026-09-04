import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const sliderRecipeDefaultVariants = {
	size: "md",
};
const sliderRecipeCompoundVariants = [];

const sliderRecipeSlotNames = [
	["root", "slider__root"],
	["control", "slider__control"],
	["label", "slider__label"],
	["step", "slider__step"],
	["marker", "slider__marker"],
	["range", "slider__range"],
	["thumb", "slider__thumb"],
	["valueText", "slider__valueText"],
	["track", "slider__track"],
	["markerGroup", "slider__markerGroup"],
	["stepGroup", "slider__stepGroup"],
];
const sliderRecipeSlotFns = /* @__PURE__ */ sliderRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			sliderRecipeDefaultVariants,
			getSlotCompoundVariant(sliderRecipeCompoundVariants, slotName),
		),
	],
);

const sliderRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		sliderRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const sliderRecipeVariantKeys = ["size"];
const getVariantProps = (variants) => ({
	...sliderRecipeDefaultVariants,
	...compact(variants),
});

export const sliderRecipe = /* @__PURE__ */ Object.assign(sliderRecipeFn, {
	__recipe__: false,
	__name__: "sliderRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: sliderRecipeVariantKeys,
	variantMap: {
		size: ["xs", "sm", "md", "lg", "xl"],
	},
	splitVariantProps(props) {
		return splitProps(props, sliderRecipeVariantKeys);
	},
	getVariantProps,
});
