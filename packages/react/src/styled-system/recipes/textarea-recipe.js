import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const textareaRecipeFn = /* @__PURE__ */ createRecipe('textarea', {
  "size": "md",
  "variant": "primary"
}, [])

const textareaRecipeVariantMap = {
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ],
  "variant": [
    "primary",
    "secondary",
    "tertiary"
  ]
}

const textareaRecipeVariantKeys = Object.keys(textareaRecipeVariantMap)

export const textareaRecipe = /* @__PURE__ */ Object.assign(memo(textareaRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'textareaRecipe',
  __getCompoundVariantCss__: textareaRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textareaRecipeVariantKeys,
  variantMap: textareaRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textareaRecipeVariantKeys)
  },
  getVariantProps: textareaRecipeFn.getVariantProps,
})