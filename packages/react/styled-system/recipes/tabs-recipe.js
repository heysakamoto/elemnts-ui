import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tabsRecipeDefaultVariants = {
  "size": "md",
  "variant": "primary"
}
const tabsRecipeCompoundVariants = []

const tabsRecipeSlotNames = [
  [
    "root",
    "tabs__root"
  ],
  [
    "content",
    "tabs__content"
  ],
  [
    "list",
    "tabs__list"
  ],
  [
    "trigger",
    "tabs__trigger"
  ],
  [
    "indicator",
    "tabs__indicator"
  ],
  [
    "panel",
    "tabs__panel"
  ]
]
const tabsRecipeSlotFns = /* @__PURE__ */ tabsRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tabsRecipeDefaultVariants, getSlotCompoundVariant(tabsRecipeCompoundVariants, slotName))])

const tabsRecipeFn = memo((props = {}) => {
  return Object.fromEntries(tabsRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const tabsRecipeVariantKeys = [
  "size",
  "variant"
]
const getVariantProps = (variants) => ({ ...tabsRecipeDefaultVariants, ...compact(variants) })

export const tabsRecipe = /* @__PURE__ */ Object.assign(tabsRecipeFn, {
  __recipe__: false,
  __name__: 'tabsRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: tabsRecipeVariantKeys,
  variantMap: {
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ],
  "variant": [
    "primary",
    "secondary",
    "tertiary"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, tabsRecipeVariantKeys)
  },
  getVariantProps
})