import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const navigationMenuRecipeDefaultVariants = {}
const navigationMenuRecipeCompoundVariants = []

const navigationMenuRecipeSlotNames = [
  [
    "root",
    "navigation-menu__root"
  ],
  [
    "list",
    "navigation-menu__list"
  ],
  [
    "item",
    "navigation-menu__item"
  ],
  [
    "trigger",
    "navigation-menu__trigger"
  ],
  [
    "link",
    "navigation-menu__link"
  ],
  [
    "arrow",
    "navigation-menu__arrow"
  ],
  [
    "indicator",
    "navigation-menu__indicator"
  ],
  [
    "itemIndicator",
    "navigation-menu__itemIndicator"
  ],
  [
    "viewport",
    "navigation-menu__viewport"
  ],
  [
    "viewportPositioner",
    "navigation-menu__viewportPositioner"
  ],
  [
    "content",
    "navigation-menu__content"
  ]
]
const navigationMenuRecipeSlotFns = /* @__PURE__ */ navigationMenuRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, navigationMenuRecipeDefaultVariants, getSlotCompoundVariant(navigationMenuRecipeCompoundVariants, slotName))])

const navigationMenuRecipeFn = memo((props = {}) => {
  return Object.fromEntries(navigationMenuRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const navigationMenuRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...navigationMenuRecipeDefaultVariants, ...compact(variants) })

export const navigationMenuRecipe = /* @__PURE__ */ Object.assign(navigationMenuRecipeFn, {
  __recipe__: false,
  __name__: 'navigationMenuRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: navigationMenuRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, navigationMenuRecipeVariantKeys)
  },
  getVariantProps
})