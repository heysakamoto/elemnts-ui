import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const spinnerRecipeFn = /* @__PURE__ */ createRecipe('spinner', {
  "size": "md",
  "speed": "normal"
}, [])

const spinnerRecipeVariantMap = {
  "speed": [
    "slow",
    "normal",
    "fast"
  ],
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
}

const spinnerRecipeVariantKeys = Object.keys(spinnerRecipeVariantMap)

export const spinnerRecipe = /* @__PURE__ */ Object.assign(memo(spinnerRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'spinnerRecipe',
  __getCompoundVariantCss__: spinnerRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: spinnerRecipeVariantKeys,
  variantMap: spinnerRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, spinnerRecipeVariantKeys)
  },
  getVariantProps: spinnerRecipeFn.getVariantProps,
})