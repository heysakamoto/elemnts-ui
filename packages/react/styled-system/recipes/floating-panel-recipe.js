import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const floatingPanelRecipeDefaultVariants = {}
const floatingPanelRecipeCompoundVariants = []

const floatingPanelRecipeSlotNames = [
  [
    "root",
    "floating-panel__root"
  ],
  [
    "body",
    "floating-panel__body"
  ],
  [
    "title",
    "floating-panel__title"
  ],
  [
    "header",
    "floating-panel__header"
  ],
  [
    "control",
    "floating-panel__control"
  ],
  [
    "content",
    "floating-panel__content"
  ],
  [
    "trigger",
    "floating-panel__trigger"
  ],
  [
    "positioner",
    "floating-panel__positioner"
  ],
  [
    "dragTrigger",
    "floating-panel__dragTrigger"
  ],
  [
    "closeTrigger",
    "floating-panel__closeTrigger"
  ],
  [
    "stageTrigger",
    "floating-panel__stageTrigger"
  ],
  [
    "resizeTrigger",
    "floating-panel__resizeTrigger"
  ]
]
const floatingPanelRecipeSlotFns = /* @__PURE__ */ floatingPanelRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, floatingPanelRecipeDefaultVariants, getSlotCompoundVariant(floatingPanelRecipeCompoundVariants, slotName))])

const floatingPanelRecipeFn = memo((props = {}) => {
  return Object.fromEntries(floatingPanelRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const floatingPanelRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...floatingPanelRecipeDefaultVariants, ...compact(variants) })

export const floatingPanelRecipe = /* @__PURE__ */ Object.assign(floatingPanelRecipeFn, {
  __recipe__: false,
  __name__: 'floatingPanelRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: floatingPanelRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, floatingPanelRecipeVariantKeys)
  },
  getVariantProps
})