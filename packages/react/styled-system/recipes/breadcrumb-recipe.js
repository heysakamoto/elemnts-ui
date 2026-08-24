import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const breadcrumbRecipeDefaultVariants = {}
const breadcrumbRecipeCompoundVariants = []

const breadcrumbRecipeSlotNames = [
  [
    "root",
    "breadcrumb__root"
  ],
  [
    "list",
    "breadcrumb__list"
  ],
  [
    "item",
    "breadcrumb__item"
  ],
  [
    "link",
    "breadcrumb__link"
  ],
  [
    "currentLink",
    "breadcrumb__currentLink"
  ],
  [
    "separator",
    "breadcrumb__separator"
  ],
  [
    "ellipsis",
    "breadcrumb__ellipsis"
  ]
]
const breadcrumbRecipeSlotFns = /* @__PURE__ */ breadcrumbRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, breadcrumbRecipeDefaultVariants, getSlotCompoundVariant(breadcrumbRecipeCompoundVariants, slotName))])

const breadcrumbRecipeFn = memo((props = {}) => {
  return Object.fromEntries(breadcrumbRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const breadcrumbRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...breadcrumbRecipeDefaultVariants, ...compact(variants) })

export const breadcrumbRecipe = /* @__PURE__ */ Object.assign(breadcrumbRecipeFn, {
  __recipe__: false,
  __name__: 'breadcrumbRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: breadcrumbRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, breadcrumbRecipeVariantKeys)
  },
  getVariantProps
})