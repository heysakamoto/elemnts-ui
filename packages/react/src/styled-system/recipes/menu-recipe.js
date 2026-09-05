import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const menuRecipeDefaultVariants = {}
const menuRecipeCompoundVariants = []

const menuRecipeSlotNames = [
  [
    "content",
    "menu__content"
  ],
  [
    "separator",
    "menu__separator"
  ],
  [
    "trigger",
    "menu__trigger"
  ],
  [
    "indicator",
    "menu__indicator"
  ],
  [
    "item",
    "menu__item"
  ],
  [
    "itemText",
    "menu__itemText"
  ],
  [
    "itemGroup",
    "menu__itemGroup"
  ],
  [
    "itemIndicator",
    "menu__itemIndicator"
  ],
  [
    "itemGroupLabel",
    "menu__itemGroupLabel"
  ],
  [
    "arrow",
    "menu__arrow"
  ],
  [
    "arrowTip",
    "menu__arrowTip"
  ],
  [
    "contextTrigger",
    "menu__contextTrigger"
  ],
  [
    "positioner",
    "menu__positioner"
  ],
  [
    "triggerItem",
    "menu__triggerItem"
  ],
  [
    "radioItemGroup",
    "menu__radioItemGroup"
  ],
  [
    "radioItem",
    "menu__radioItem"
  ],
  [
    "checkboxItem",
    "menu__checkboxItem"
  ]
]
const menuRecipeSlotFns = /* @__PURE__ */ menuRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, menuRecipeDefaultVariants, getSlotCompoundVariant(menuRecipeCompoundVariants, slotName))])

const menuRecipeFn = memo((props = {}) => {
  return Object.fromEntries(menuRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const menuRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...menuRecipeDefaultVariants, ...compact(variants) })

export const menuRecipe = /* @__PURE__ */ Object.assign(menuRecipeFn, {
  __recipe__: false,
  __name__: 'menuRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: menuRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, menuRecipeVariantKeys)
  },
  getVariantProps
})