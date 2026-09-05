import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const visuallyHiddenRecipeFn = /* @__PURE__ */ createRecipe('v-hidden', {}, [])

const visuallyHiddenRecipeVariantMap = {}

const visuallyHiddenRecipeVariantKeys = Object.keys(visuallyHiddenRecipeVariantMap)

export const visuallyHiddenRecipe = /* @__PURE__ */ Object.assign(memo(visuallyHiddenRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'visuallyHiddenRecipe',
  __getCompoundVariantCss__: visuallyHiddenRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: visuallyHiddenRecipeVariantKeys,
  variantMap: visuallyHiddenRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, visuallyHiddenRecipeVariantKeys)
  },
  getVariantProps: visuallyHiddenRecipeFn.getVariantProps,
})