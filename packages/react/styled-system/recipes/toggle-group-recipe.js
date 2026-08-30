import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const toggleGroupRecipeDefaultVariants = {
	fullWidth: false,
	attached: false,
	orientation: "horizontal",
};
const toggleGroupRecipeCompoundVariants = [
	{
		attached: true,
		orientation: "horizontal",
		css: {
			root: {
				"& > *:not(:first-child)": {
					borderLeft: "none",
				},
			},
		},
	},
	{
		attached: true,
		orientation: "vertical",
		css: {
			root: {
				"& > *:not(:first-child)": {
					borderTop: "none",
				},
			},
		},
	},
];

const toggleGroupRecipeSlotNames = [
	["root", "toggle-group__root"],
	["item", "toggle-group__item"],
];
const toggleGroupRecipeSlotFns = /* @__PURE__ */ toggleGroupRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			toggleGroupRecipeDefaultVariants,
			getSlotCompoundVariant(toggleGroupRecipeCompoundVariants, slotName),
		),
	],
);

const toggleGroupRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		toggleGroupRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const toggleGroupRecipeVariantKeys = ["fullWidth", "attached", "orientation"];
const getVariantProps = (variants) => ({
	...toggleGroupRecipeDefaultVariants,
	...compact(variants),
});

export const toggleGroupRecipe = /* @__PURE__ */ Object.assign(
	toggleGroupRecipeFn,
	{
		__recipe__: false,
		__name__: "toggleGroupRecipe",
		raw: (props) => props,
		classNameMap: {},
		variantKeys: toggleGroupRecipeVariantKeys,
		variantMap: {
			fullWidth: ["true"],
			attached: ["true", "false"],
			orientation: ["horizontal", "vertical"],
		},
		splitVariantProps(props) {
			return splitProps(props, toggleGroupRecipeVariantKeys);
		},
		getVariantProps,
	},
);
