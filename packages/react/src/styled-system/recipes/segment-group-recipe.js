import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const segmentGroupRecipeDefaultVariants = {
	size: "md",
	fullWidth: false,
	variant: "primary",
};
const segmentGroupRecipeCompoundVariants = [];

const segmentGroupRecipeSlotNames = [
	["root", "segment-group__root"],
	["label", "segment-group__label"],
	["item", "segment-group__item"],
	["indicator", "segment-group__indicator"],
	["itemText", "segment-group__itemText"],
	["itemControl", "segment-group__itemControl"],
];
const segmentGroupRecipeSlotFns =
	/* @__PURE__ */ segmentGroupRecipeSlotNames.map(([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			segmentGroupRecipeDefaultVariants,
			getSlotCompoundVariant(segmentGroupRecipeCompoundVariants, slotName),
		),
	]);

const segmentGroupRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		segmentGroupRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const segmentGroupRecipeVariantKeys = ["fullWidth", "size", "variant"];
const getVariantProps = (variants) => ({
	...segmentGroupRecipeDefaultVariants,
	...compact(variants),
});

export const segmentGroupRecipe = /* @__PURE__ */ Object.assign(
	segmentGroupRecipeFn,
	{
		__recipe__: false,
		__name__: "segmentGroupRecipe",
		raw: (props) => props,
		classNameMap: {},
		variantKeys: segmentGroupRecipeVariantKeys,
		variantMap: {
			fullWidth: ["true"],
			size: ["xs", "sm", "md", "lg", "xl"],
			variant: ["primary", "secondary", "tertiary"],
		},
		splitVariantProps(props) {
			return splitProps(props, segmentGroupRecipeVariantKeys);
		},
		getVariantProps,
	},
);
