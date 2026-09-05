import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const proseRecipeFn = /* @__PURE__ */ createRecipe('prose', {}, [])

const proseRecipeVariantMap = {}

const proseRecipeVariantKeys = Object.keys(proseRecipeVariantMap)

export const proseRecipe = /* @__PURE__ */ Object.assign(memo(proseRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'proseRecipe',
  __getCompoundVariantCss__: proseRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: proseRecipeVariantKeys,
  variantMap: proseRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, proseRecipeVariantKeys)
  },
  getVariantProps: proseRecipeFn.getVariantProps,
})