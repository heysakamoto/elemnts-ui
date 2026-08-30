import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const itemRecipeFn = /* @__PURE__ */ createRecipe(
	"item",
	{
		size: "md",
		iconOnly: false,
		variant: "primary",
	},
	[],
);

const itemRecipeVariantMap = {
	size: ["xs", "sm", "md", "lg", "xl"],
	variant: ["primary", "secondary", "tertiary", "surface"],
	iconOnly: ["true"],
};

const itemRecipeVariantKeys = Object.keys(itemRecipeVariantMap);

export const itemRecipe = /* @__PURE__ */ Object.assign(
	memo(itemRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "itemRecipe",
		__getCompoundVariantCss__: itemRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: itemRecipeVariantKeys,
		variantMap: itemRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, itemRecipeVariantKeys);
		},
		getVariantProps: itemRecipeFn.getVariantProps,
	},
);
