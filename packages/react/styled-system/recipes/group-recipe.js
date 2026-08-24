import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const groupRecipeFn = /* @__PURE__ */ createRecipe('group', {
  "fullWidth": false,
  "attached": false,
  "orientation": "horizontal"
}, [
  {
    "attached": true,
    "orientation": "horizontal",
    "css": {
      "& > *:not(:first-child)": {
        "borderLeft": "none"
      }
    }
  },
  {
    "attached": true,
    "orientation": "vertical",
    "css": {
      "& > *:not(:first-child)": {
        "borderTop": "none"
      }
    }
  }
])

const groupRecipeVariantMap = {
  "fullWidth": [
    "true"
  ],
  "attached": [
    "true",
    "false"
  ],
  "orientation": [
    "horizontal",
    "vertical"
  ]
}

const groupRecipeVariantKeys = Object.keys(groupRecipeVariantMap)

export const groupRecipe = /* @__PURE__ */ Object.assign(memo(groupRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'groupRecipe',
  __getCompoundVariantCss__: groupRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: groupRecipeVariantKeys,
  variantMap: groupRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, groupRecipeVariantKeys)
  },
  getVariantProps: groupRecipeFn.getVariantProps,
})