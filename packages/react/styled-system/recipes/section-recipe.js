import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const sectionRecipeFn = /* @__PURE__ */ createRecipe('section', {
  "screen": "fit"
}, [])

const sectionRecipeVariantMap = {}

const sectionRecipeVariantKeys = Object.keys(sectionRecipeVariantMap)

export const sectionRecipe = /* @__PURE__ */ Object.assign(memo(sectionRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'sectionRecipe',
  __getCompoundVariantCss__: sectionRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: sectionRecipeVariantKeys,
  variantMap: sectionRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, sectionRecipeVariantKeys)
  },
  getVariantProps: sectionRecipeFn.getVariantProps,
})