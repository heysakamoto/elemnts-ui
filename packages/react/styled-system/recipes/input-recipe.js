import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const inputRecipeFn = /* @__PURE__ */ createRecipe('input', {
  "size": "md",
  "variant": "primary"
}, [])

const inputRecipeVariantMap = {
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

const inputRecipeVariantKeys = Object.keys(inputRecipeVariantMap)

export const inputRecipe = /* @__PURE__ */ Object.assign(memo(inputRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'inputRecipe',
  __getCompoundVariantCss__: inputRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: inputRecipeVariantKeys,
  variantMap: inputRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, inputRecipeVariantKeys)
  },
  getVariantProps: inputRecipeFn.getVariantProps,
})