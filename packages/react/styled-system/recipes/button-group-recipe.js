import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const buttonGroupRecipeDefaultVariants = {
	fullWidth: false,
	attached: false,
	orientation: "horizontal",
};
const buttonGroupRecipeCompoundVariants = [
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

const buttonGroupRecipeSlotNames = [
	["root", "btn-group__root"],
	["separator", "btn-group__separator"],
];
const buttonGroupRecipeSlotFns = /* @__PURE__ */ buttonGroupRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			buttonGroupRecipeDefaultVariants,
			getSlotCompoundVariant(buttonGroupRecipeCompoundVariants, slotName),
		),
	],
);

const buttonGroupRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		buttonGroupRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const buttonGroupRecipeVariantKeys = ["fullWidth", "attached", "orientation"];
const getVariantProps = (variants) => ({
	...buttonGroupRecipeDefaultVariants,
	...compact(variants),
});

export const buttonGroupRecipe = /* @__PURE__ */ Object.assign(
	buttonGroupRecipeFn,
	{
		__recipe__: false,
		__name__: "buttonGroupRecipe",
		raw: (props) => props,
		classNameMap: {},
		variantKeys: buttonGroupRecipeVariantKeys,
		variantMap: {
			fullWidth: ["true"],
			attached: ["true", "false"],
			orientation: ["horizontal", "vertical"],
		},
		splitVariantProps(props) {
			return splitProps(props, buttonGroupRecipeVariantKeys);
		},
		getVariantProps,
	},
);
