import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const textRecipeFn = /* @__PURE__ */ createRecipe('text', {
  "truncate": false
}, [])

const textRecipeVariantMap = {
  "truncate": [
    "true"
  ]
}

const textRecipeVariantKeys = Object.keys(textRecipeVariantMap)

export const textRecipe = /* @__PURE__ */ Object.assign(memo(textRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'textRecipe',
  __getCompoundVariantCss__: textRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textRecipeVariantKeys,
  variantMap: textRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, textRecipeVariantKeys)
  },
  getVariantProps: textRecipeFn.getVariantProps,
})