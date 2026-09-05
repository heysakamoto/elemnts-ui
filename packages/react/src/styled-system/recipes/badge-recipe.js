import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const badgeRecipeDefaultVariants = {
  "size": "md",
  "variant": "primary",
  "placement": "bottom-right"
}
const badgeRecipeCompoundVariants = []

const badgeRecipeSlotNames = [
  [
    "root",
    "badge__root"
  ],
  [
    "indicator",
    "badge__indicator"
  ]
]
const badgeRecipeSlotFns = /* @__PURE__ */ badgeRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, badgeRecipeDefaultVariants, getSlotCompoundVariant(badgeRecipeCompoundVariants, slotName))])

const badgeRecipeFn = memo((props = {}) => {
  return Object.fromEntries(badgeRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const badgeRecipeVariantKeys = [
  "size",
  "placement",
  "variant"
]
const getVariantProps = (variants) => ({ ...badgeRecipeDefaultVariants, ...compact(variants) })

export const badgeRecipe = /* @__PURE__ */ Object.assign(badgeRecipeFn, {
  __recipe__: false,
  __name__: 'badgeRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: badgeRecipeVariantKeys,
  variantMap: {
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ],
  "placement": [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right"
  ],
  "variant": [
    "primary",
    "secondary"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, badgeRecipeVariantKeys)
  },
  getVariantProps
})