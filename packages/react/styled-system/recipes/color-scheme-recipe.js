import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const colorSchemeRecipeDefaultVariants = {}
const colorSchemeRecipeCompoundVariants = []

const colorSchemeRecipeSlotNames = [
  [
    "root",
    "color-scheme__root"
  ],
  [
    "trigger",
    "color-scheme__trigger"
  ],
  [
    "indicator",
    "color-scheme__indicator"
  ]
]
const colorSchemeRecipeSlotFns = /* @__PURE__ */ colorSchemeRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, colorSchemeRecipeDefaultVariants, getSlotCompoundVariant(colorSchemeRecipeCompoundVariants, slotName))])

const colorSchemeRecipeFn = memo((props = {}) => {
  return Object.fromEntries(colorSchemeRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const colorSchemeRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...colorSchemeRecipeDefaultVariants, ...compact(variants) })

export const colorSchemeRecipe = /* @__PURE__ */ Object.assign(colorSchemeRecipeFn, {
  __recipe__: false,
  __name__: 'colorSchemeRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: colorSchemeRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, colorSchemeRecipeVariantKeys)
  },
  getVariantProps
})