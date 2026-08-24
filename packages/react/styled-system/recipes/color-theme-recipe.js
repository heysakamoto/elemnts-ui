import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const colorThemeRecipeDefaultVariants = {}
const colorThemeRecipeCompoundVariants = []

const colorThemeRecipeSlotNames = [
  [
    "scope",
    "color-theme__scope"
  ],
  [
    "trigger",
    "color-theme__trigger"
  ],
  [
    "indicator",
    "color-theme__indicator"
  ]
]
const colorThemeRecipeSlotFns = /* @__PURE__ */ colorThemeRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, colorThemeRecipeDefaultVariants, getSlotCompoundVariant(colorThemeRecipeCompoundVariants, slotName))])

const colorThemeRecipeFn = memo((props = {}) => {
  return Object.fromEntries(colorThemeRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const colorThemeRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...colorThemeRecipeDefaultVariants, ...compact(variants) })

export const colorThemeRecipe = /* @__PURE__ */ Object.assign(colorThemeRecipeFn, {
  __recipe__: false,
  __name__: 'colorThemeRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: colorThemeRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, colorThemeRecipeVariantKeys)
  },
  getVariantProps
})