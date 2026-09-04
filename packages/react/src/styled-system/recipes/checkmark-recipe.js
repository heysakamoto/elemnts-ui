import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const checkmarkRecipeFn = /* @__PURE__ */ createRecipe(
	"checkmark",
	{
		size: "md",
		variant: "primary",
	},
	[],
);

const checkmarkRecipeVariantMap = {
	size: ["xs", "sm", "md", "lg", "xl"],
	variant: ["primary", "secondary", "tertiary", "ghost"],
};

const checkmarkRecipeVariantKeys = Object.keys(checkmarkRecipeVariantMap);

export const checkmarkRecipe = /* @__PURE__ */ Object.assign(
	memo(checkmarkRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "checkmarkRecipe",
		__getCompoundVariantCss__: checkmarkRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: checkmarkRecipeVariantKeys,
		variantMap: checkmarkRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, checkmarkRecipeVariantKeys);
		},
		getVariantProps: checkmarkRecipeFn.getVariantProps,
	},
);
