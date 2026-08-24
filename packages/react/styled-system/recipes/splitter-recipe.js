import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const splitterRecipeDefaultVariants = {}
const splitterRecipeCompoundVariants = []

const splitterRecipeSlotNames = [
  [
    "root",
    "splitter__root"
  ],
  [
    "panel",
    "splitter__panel"
  ],
  [
    "resizeTrigger",
    "splitter__resizeTrigger"
  ],
  [
    "resizeTriggerIndicator",
    "splitter__resizeTriggerIndicator"
  ],
  [
    "resizeTriggerSeparator",
    "splitter__resizeTriggerSeparator"
  ]
]
const splitterRecipeSlotFns = /* @__PURE__ */ splitterRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, splitterRecipeDefaultVariants, getSlotCompoundVariant(splitterRecipeCompoundVariants, slotName))])

const splitterRecipeFn = memo((props = {}) => {
  return Object.fromEntries(splitterRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const splitterRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...splitterRecipeDefaultVariants, ...compact(variants) })

export const splitterRecipe = /* @__PURE__ */ Object.assign(splitterRecipeFn, {
  __recipe__: false,
  __name__: 'splitterRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: splitterRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, splitterRecipeVariantKeys)
  },
  getVariantProps
})