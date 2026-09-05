import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const radiomarkRecipeFn = /* @__PURE__ */ createRecipe('radiomark', {
  "size": "md"
}, [])

const radiomarkRecipeVariantMap = {
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ]
}

const radiomarkRecipeVariantKeys = Object.keys(radiomarkRecipeVariantMap)

export const radiomarkRecipe = /* @__PURE__ */ Object.assign(memo(radiomarkRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'radiomarkRecipe',
  __getCompoundVariantCss__: radiomarkRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: radiomarkRecipeVariantKeys,
  variantMap: radiomarkRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, radiomarkRecipeVariantKeys)
  },
  getVariantProps: radiomarkRecipeFn.getVariantProps,
})