import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const tileRecipeDefaultVariants = {
	size: "md",
	variant: "primary",
	orientation: "horizontal",
};
const tileRecipeCompoundVariants = [];

const tileRecipeSlotNames = [
	["root", "tile__root"],
	["content", "tile__content"],
	["control", "tile__control"],
	["addon", "tile__addon"],
	["title", "tile__title"],
	["description", "tile__description"],
	["indicator", "tile__indicator"],
];
const tileRecipeSlotFns = /* @__PURE__ */ tileRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			tileRecipeDefaultVariants,
			getSlotCompoundVariant(tileRecipeCompoundVariants, slotName),
		),
	],
);

const tileRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		tileRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const tileRecipeVariantKeys = ["orientation", "size", "variant"];
const getVariantProps = (variants) => ({
	...tileRecipeDefaultVariants,
	...compact(variants),
});

export const tileRecipe = /* @__PURE__ */ Object.assign(tileRecipeFn, {
	__recipe__: false,
	__name__: "tileRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: tileRecipeVariantKeys,
	variantMap: {
		orientation: ["horizontal", "vertical"],
		size: ["xs", "sm", "md", "lg", "xl"],
		variant: ["primary", "secondary", "tertiary", "surface"],
	},
	splitVariantProps(props) {
		return splitProps(props, tileRecipeVariantKeys);
	},
	getVariantProps,
});
