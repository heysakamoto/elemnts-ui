import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const kbdGroupRecipeDefaultVariants = {}
const kbdGroupRecipeCompoundVariants = []

const kbdGroupRecipeSlotNames = [
  [
    "root",
    "kbd-group__root"
  ],
  [
    "separator",
    "kbd-group__separator"
  ]
]
const kbdGroupRecipeSlotFns = /* @__PURE__ */ kbdGroupRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, kbdGroupRecipeDefaultVariants, getSlotCompoundVariant(kbdGroupRecipeCompoundVariants, slotName))])

const kbdGroupRecipeFn = memo((props = {}) => {
  return Object.fromEntries(kbdGroupRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const kbdGroupRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...kbdGroupRecipeDefaultVariants, ...compact(variants) })

export const kbdGroupRecipe = /* @__PURE__ */ Object.assign(kbdGroupRecipeFn, {
  __recipe__: false,
  __name__: 'kbdGroupRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: kbdGroupRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, kbdGroupRecipeVariantKeys)
  },
  getVariantProps
})