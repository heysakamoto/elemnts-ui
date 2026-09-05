import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const buttonRecipeFn = /* @__PURE__ */ createRecipe('btn', {
  "size": "md",
  "iconOnly": false,
  "fullWidth": false,
  "variant": "primary"
}, [])

const buttonRecipeVariantMap = {
  "size": [
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ],
  "variant": [
    "primary",
    "secondary",
    "tertiary",
    "ghost",
    "surface",
    "plain"
  ],
  "fullWidth": [
    "true"
  ],
  "iconOnly": [
    "true"
  ]
}

const buttonRecipeVariantKeys = Object.keys(buttonRecipeVariantMap)

export const buttonRecipe = /* @__PURE__ */ Object.assign(memo(buttonRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'buttonRecipe',
  __getCompoundVariantCss__: buttonRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: buttonRecipeVariantKeys,
  variantMap: buttonRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, buttonRecipeVariantKeys)
  },
  getVariantProps: buttonRecipeFn.getVariantProps,
})