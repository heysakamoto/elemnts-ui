import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const stepsRecipeDefaultVariants = {};
const stepsRecipeCompoundVariants = [];

const stepsRecipeSlotNames = [
	["root", "steps__root"],
	["content", "steps__content"],
	["list", "steps__list"],
	["item", "steps__item"],
	["trigger", "steps__trigger"],
	["indicator", "steps__indicator"],
	["separator", "steps__separator"],
	["completedContent", "steps__completedContent"],
	["nextTrigger", "steps__nextTrigger"],
	["prevTrigger", "steps__prevTrigger"],
	["progress", "steps__progress"],
	["trigger", "steps__trigger"],
];
const stepsRecipeSlotFns = /* @__PURE__ */ stepsRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			stepsRecipeDefaultVariants,
			getSlotCompoundVariant(stepsRecipeCompoundVariants, slotName),
		),
	],
);

const stepsRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		stepsRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const stepsRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...stepsRecipeDefaultVariants,
	...compact(variants),
});

export const stepsRecipe = /* @__PURE__ */ Object.assign(stepsRecipeFn, {
	__recipe__: false,
	__name__: "stepsRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: stepsRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, stepsRecipeVariantKeys);
	},
	getVariantProps,
});
