import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const dataListRecipeDefaultVariants = {
	orientation: "vertical",
};
const dataListRecipeCompoundVariants = [];

const dataListRecipeSlotNames = [
	["root", "data-list__root"],
	["item", "data-list__item"],
	["itemLabel", "data-list__itemLabel"],
	["itemValue", "data-list__itemValue"],
];
const dataListRecipeSlotFns = /* @__PURE__ */ dataListRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			dataListRecipeDefaultVariants,
			getSlotCompoundVariant(dataListRecipeCompoundVariants, slotName),
		),
	],
);

const dataListRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		dataListRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const dataListRecipeVariantKeys = ["orientation"];
const getVariantProps = (variants) => ({
	...dataListRecipeDefaultVariants,
	...compact(variants),
});

export const dataListRecipe = /* @__PURE__ */ Object.assign(dataListRecipeFn, {
	__recipe__: false,
	__name__: "dataListRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: dataListRecipeVariantKeys,
	variantMap: {
		orientation: ["horizontal", "vertical"],
	},
	splitVariantProps(props) {
		return splitProps(props, dataListRecipeVariantKeys);
	},
	getVariantProps,
});
