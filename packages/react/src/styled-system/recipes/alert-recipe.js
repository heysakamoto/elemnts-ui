import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const alertRecipeDefaultVariants = {
  "status": "info",
  "variant": "secondary"
}
const alertRecipeCompoundVariants = []

const alertRecipeSlotNames = [
  [
    "root",
    "alert__root"
  ],
  [
    "content",
    "alert__content"
  ],
  [
    "title",
    "alert__title"
  ],
  [
    "description",
    "alert__description"
  ],
  [
    "indicator",
    "alert__indicator"
  ],
  [
    "control",
    "alert__control"
  ]
]
const alertRecipeSlotFns = /* @__PURE__ */ alertRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, alertRecipeDefaultVariants, getSlotCompoundVariant(alertRecipeCompoundVariants, slotName))])

const alertRecipeFn = memo((props = {}) => {
  return Object.fromEntries(alertRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const alertRecipeVariantKeys = [
  "status",
  "variant"
]
const getVariantProps = (variants) => ({ ...alertRecipeDefaultVariants, ...compact(variants) })

export const alertRecipe = /* @__PURE__ */ Object.assign(alertRecipeFn, {
  __recipe__: false,
  __name__: 'alertRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: alertRecipeVariantKeys,
  variantMap: {
  "status": [
    "default",
    "info",
    "destructive",
    "success",
    "warning"
  ],
  "variant": [
    "primary",
    "secondary",
    "tertiary",
    "surface"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, alertRecipeVariantKeys)
  },
  getVariantProps
})