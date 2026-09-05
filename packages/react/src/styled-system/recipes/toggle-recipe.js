import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const toggleRecipeDefaultVariants = {}
const toggleRecipeCompoundVariants = []

const toggleRecipeSlotNames = [
  [
    "root",
    "toggle__root"
  ],
  [
    "indicator",
    "toggle__indicator"
  ]
]
const toggleRecipeSlotFns = /* @__PURE__ */ toggleRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, toggleRecipeDefaultVariants, getSlotCompoundVariant(toggleRecipeCompoundVariants, slotName))])

const toggleRecipeFn = memo((props = {}) => {
  return Object.fromEntries(toggleRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const toggleRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...toggleRecipeDefaultVariants, ...compact(variants) })

export const toggleRecipe = /* @__PURE__ */ Object.assign(toggleRecipeFn, {
  __recipe__: false,
  __name__: 'toggleRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: toggleRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, toggleRecipeVariantKeys)
  },
  getVariantProps
})