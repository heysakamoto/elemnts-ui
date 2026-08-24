import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const statusRecipeDefaultVariants = {
  "size": "md"
}
const statusRecipeCompoundVariants = []

const statusRecipeSlotNames = [
  [
    "root",
    "status__root"
  ],
  [
    "indicator",
    "status__indicator"
  ],
  [
    "text",
    "status__text"
  ]
]
const statusRecipeSlotFns = /* @__PURE__ */ statusRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, statusRecipeDefaultVariants, getSlotCompoundVariant(statusRecipeCompoundVariants, slotName))])

const statusRecipeFn = memo((props = {}) => {
  return Object.fromEntries(statusRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const statusRecipeVariantKeys = [
  "size"
]
const getVariantProps = (variants) => ({ ...statusRecipeDefaultVariants, ...compact(variants) })

export const statusRecipe = /* @__PURE__ */ Object.assign(statusRecipeFn, {
  __recipe__: false,
  __name__: 'statusRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: statusRecipeVariantKeys,
  variantMap: {
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, statusRecipeVariantKeys)
  },
  getVariantProps
})