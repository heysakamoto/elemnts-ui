import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const aspectRatioRecipeFn = /* @__PURE__ */ createRecipe('aspect-ratio', {}, [])

const aspectRatioRecipeVariantMap = {}

const aspectRatioRecipeVariantKeys = Object.keys(aspectRatioRecipeVariantMap)

export const aspectRatioRecipe = /* @__PURE__ */ Object.assign(memo(aspectRatioRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'aspectRatioRecipe',
  __getCompoundVariantCss__: aspectRatioRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: aspectRatioRecipeVariantKeys,
  variantMap: aspectRatioRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, aspectRatioRecipeVariantKeys)
  },
  getVariantProps: aspectRatioRecipeFn.getVariantProps,
})