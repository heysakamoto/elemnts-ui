import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const marqueeRecipeDefaultVariants = {}
const marqueeRecipeCompoundVariants = []

const marqueeRecipeSlotNames = [
  [
    "root",
    "marquee__root"
  ],
  [
    "content",
    "marquee__content"
  ],
  [
    "edge",
    "marquee__edge"
  ],
  [
    "item",
    "marquee__item"
  ],
  [
    "viewport",
    "marquee__viewport"
  ]
]
const marqueeRecipeSlotFns = /* @__PURE__ */ marqueeRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, marqueeRecipeDefaultVariants, getSlotCompoundVariant(marqueeRecipeCompoundVariants, slotName))])

const marqueeRecipeFn = memo((props = {}) => {
  return Object.fromEntries(marqueeRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const marqueeRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...marqueeRecipeDefaultVariants, ...compact(variants) })

export const marqueeRecipe = /* @__PURE__ */ Object.assign(marqueeRecipeFn, {
  __recipe__: false,
  __name__: 'marqueeRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: marqueeRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, marqueeRecipeVariantKeys)
  },
  getVariantProps
})