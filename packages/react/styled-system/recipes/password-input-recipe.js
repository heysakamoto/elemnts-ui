import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const passwordInputRecipeDefaultVariants = {}
const passwordInputRecipeCompoundVariants = []

const passwordInputRecipeSlotNames = [
  [
    "root",
    "password__root"
  ],
  [
    "label",
    "password__label"
  ],
  [
    "control",
    "password__control"
  ],
  [
    "visibilityTrigger",
    "password__visibilityTrigger"
  ],
  [
    "indicator",
    "password__indicator"
  ],
  [
    "input",
    "password__input"
  ]
]
const passwordInputRecipeSlotFns = /* @__PURE__ */ passwordInputRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, passwordInputRecipeDefaultVariants, getSlotCompoundVariant(passwordInputRecipeCompoundVariants, slotName))])

const passwordInputRecipeFn = memo((props = {}) => {
  return Object.fromEntries(passwordInputRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const passwordInputRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...passwordInputRecipeDefaultVariants, ...compact(variants) })

export const passwordInputRecipe = /* @__PURE__ */ Object.assign(passwordInputRecipeFn, {
  __recipe__: false,
  __name__: 'passwordInputRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: passwordInputRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, passwordInputRecipeVariantKeys)
  },
  getVariantProps
})