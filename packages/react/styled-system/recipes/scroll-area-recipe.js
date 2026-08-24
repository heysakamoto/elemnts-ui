import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const scrollAreaRecipeDefaultVariants = {
  "size": "sm",
  "variant": "hover"
}
const scrollAreaRecipeCompoundVariants = []

const scrollAreaRecipeSlotNames = [
  [
    "root",
    "scroll-area__root"
  ],
  [
    "viewport",
    "scroll-area__viewport"
  ],
  [
    "content",
    "scroll-area__content"
  ],
  [
    "scrollbar",
    "scroll-area__scrollbar"
  ],
  [
    "thumb",
    "scroll-area__thumb"
  ],
  [
    "corner",
    "scroll-area__corner"
  ]
]
const scrollAreaRecipeSlotFns = /* @__PURE__ */ scrollAreaRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, scrollAreaRecipeDefaultVariants, getSlotCompoundVariant(scrollAreaRecipeCompoundVariants, slotName))])

const scrollAreaRecipeFn = memo((props = {}) => {
  return Object.fromEntries(scrollAreaRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const scrollAreaRecipeVariantKeys = [
  "variant",
  "size"
]
const getVariantProps = (variants) => ({ ...scrollAreaRecipeDefaultVariants, ...compact(variants) })

export const scrollAreaRecipe = /* @__PURE__ */ Object.assign(scrollAreaRecipeFn, {
  __recipe__: false,
  __name__: 'scrollAreaRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: scrollAreaRecipeVariantKeys,
  variantMap: {
  "variant": [
    "hover",
    "always"
  ],
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, scrollAreaRecipeVariantKeys)
  },
  getVariantProps
})