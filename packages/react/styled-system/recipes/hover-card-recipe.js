import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const hoverCardRecipeDefaultVariants = {};
const hoverCardRecipeCompoundVariants = [];

const hoverCardRecipeSlotNames = [
	["trigger", "hoverCard__trigger"],
	["content", "hoverCard__content"],
	["positioner", "hoverCard__positioner"],
	["arrow", "hoverCard__arrow"],
	["arrowTip", "hoverCard__arrowTip"],
];
const hoverCardRecipeSlotFns = /* @__PURE__ */ hoverCardRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			hoverCardRecipeDefaultVariants,
			getSlotCompoundVariant(hoverCardRecipeCompoundVariants, slotName),
		),
	],
);

const hoverCardRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		hoverCardRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const hoverCardRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...hoverCardRecipeDefaultVariants,
	...compact(variants),
});

export const hoverCardRecipe = /* @__PURE__ */ Object.assign(
	hoverCardRecipeFn,
	{
		__recipe__: false,
		__name__: "hoverCardRecipe",
		raw: (props) => props,
		classNameMap: {},
		variantKeys: hoverCardRecipeVariantKeys,
		variantMap: {},
		splitVariantProps(props) {
			return splitProps(props, hoverCardRecipeVariantKeys);
		},
		getVariantProps,
	},
);
