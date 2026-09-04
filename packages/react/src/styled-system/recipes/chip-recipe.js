import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const chipRecipeFn = /* @__PURE__ */ createRecipe(
	"chip",
	{
		size: "md",
		iconOnly: false,
		variant: "primary",
	},
	[],
);

const chipRecipeVariantMap = {
	size: ["2xs", "xs", "sm", "md", "lg", "xl"],
	variant: ["primary", "secondary", "tertiary", "ghost", "surface"],
	iconOnly: ["true"],
};

const chipRecipeVariantKeys = Object.keys(chipRecipeVariantMap);

export const chipRecipe = /* @__PURE__ */ Object.assign(
	memo(chipRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "chipRecipe",
		__getCompoundVariantCss__: chipRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: chipRecipeVariantKeys,
		variantMap: chipRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, chipRecipeVariantKeys);
		},
		getVariantProps: chipRecipeFn.getVariantProps,
	},
);
