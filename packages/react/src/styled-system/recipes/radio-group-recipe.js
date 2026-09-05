import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const radioGroupRecipeDefaultVariants = {
  "size": "md"
}
const radioGroupRecipeCompoundVariants = []

const radioGroupRecipeSlotNames = [
  [
    "root",
    "radio-group__root"
  ],
  [
    "label",
    "radio-group__label"
  ],
  [
    "item",
    "radio-group__item"
  ],
  [
    "itemText",
    "radio-group__itemText"
  ],
  [
    "itemControl",
    "radio-group__itemControl"
  ],
  [
    "indicator",
    "radio-group__indicator"
  ]
]
const radioGroupRecipeSlotFns = /* @__PURE__ */ radioGroupRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, radioGroupRecipeDefaultVariants, getSlotCompoundVariant(radioGroupRecipeCompoundVariants, slotName))])

const radioGroupRecipeFn = memo((props = {}) => {
  return Object.fromEntries(radioGroupRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const radioGroupRecipeVariantKeys = [
  "size"
]
const getVariantProps = (variants) => ({ ...radioGroupRecipeDefaultVariants, ...compact(variants) })

export const radioGroupRecipe = /* @__PURE__ */ Object.assign(radioGroupRecipeFn, {
  __recipe__: false,
  __name__: 'radioGroupRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: radioGroupRecipeVariantKeys,
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
    return splitProps(props, radioGroupRecipeVariantKeys)
  },
  getVariantProps
})