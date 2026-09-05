import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const dialogRecipeDefaultVariants = {
  "size": "md",
  "placement": "center"
}
const dialogRecipeCompoundVariants = []

const dialogRecipeSlotNames = [
  [
    "content",
    "dialog__content"
  ],
  [
    "trigger",
    "dialog__trigger"
  ],
  [
    "title",
    "dialog__title"
  ],
  [
    "description",
    "dialog__description"
  ],
  [
    "backdrop",
    "dialog__backdrop"
  ],
  [
    "positioner",
    "dialog__positioner"
  ],
  [
    "closeTrigger",
    "dialog__closeTrigger"
  ]
]
const dialogRecipeSlotFns = /* @__PURE__ */ dialogRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, dialogRecipeDefaultVariants, getSlotCompoundVariant(dialogRecipeCompoundVariants, slotName))])

const dialogRecipeFn = memo((props = {}) => {
  return Object.fromEntries(dialogRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const dialogRecipeVariantKeys = [
  "size",
  "placement"
]
const getVariantProps = (variants) => ({ ...dialogRecipeDefaultVariants, ...compact(variants) })

export const dialogRecipe = /* @__PURE__ */ Object.assign(dialogRecipeFn, {
  __recipe__: false,
  __name__: 'dialogRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: dialogRecipeVariantKeys,
  variantMap: {
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "cover",
    "full"
  ],
  "placement": [
    "top",
    "center",
    "bottom"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, dialogRecipeVariantKeys)
  },
  getVariantProps
})