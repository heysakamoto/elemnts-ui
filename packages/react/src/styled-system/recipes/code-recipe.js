import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const codeRecipeFn = /* @__PURE__ */ createRecipe(
	"code",
	{
		size: "md",
		iconOnly: false,
		variant: "primary",
	},
	[],
);

const codeRecipeVariantMap = {
	size: ["2xs", "xs", "sm", "md", "lg", "xl"],
	variant: ["primary", "secondary", "tertiary", "ghost", "surface"],
	iconOnly: ["true"],
};

const codeRecipeVariantKeys = Object.keys(codeRecipeVariantMap);

export const codeRecipe = /* @__PURE__ */ Object.assign(
	memo(codeRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "codeRecipe",
		__getCompoundVariantCss__: codeRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: codeRecipeVariantKeys,
		variantMap: codeRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, codeRecipeVariantKeys);
		},
		getVariantProps: codeRecipeFn.getVariantProps,
	},
);
