import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const separatorGroupRecipeDefaultVariants = {}
const separatorGroupRecipeCompoundVariants = []

const separatorGroupRecipeSlotNames = [
  [
    "root",
    "separator-group__root"
  ],
  [
    "caption",
    "separator-group__caption"
  ]
]
const separatorGroupRecipeSlotFns = /* @__PURE__ */ separatorGroupRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, separatorGroupRecipeDefaultVariants, getSlotCompoundVariant(separatorGroupRecipeCompoundVariants, slotName))])

const separatorGroupRecipeFn = memo((props = {}) => {
  return Object.fromEntries(separatorGroupRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const separatorGroupRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...separatorGroupRecipeDefaultVariants, ...compact(variants) })

export const separatorGroupRecipe = /* @__PURE__ */ Object.assign(separatorGroupRecipeFn, {
  __recipe__: false,
  __name__: 'separatorGroupRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: separatorGroupRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, separatorGroupRecipeVariantKeys)
  },
  getVariantProps
})