import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const progressRecipeDefaultVariants = {
  "size": "md",
  "thickness": "sm"
}
const progressRecipeCompoundVariants = []

const progressRecipeSlotNames = [
  [
    "circle",
    "progress__circle"
  ],
  [
    "range",
    "progress__range"
  ],
  [
    "root",
    "progress__root"
  ],
  [
    "label",
    "progress__label"
  ],
  [
    "track",
    "progress__track"
  ],
  [
    "valueText",
    "progress__valueText"
  ],
  [
    "view",
    "progress__view"
  ],
  [
    "circleTrack",
    "progress__circleTrack"
  ],
  [
    "circleRange",
    "progress__circleRange"
  ]
]
const progressRecipeSlotFns = /* @__PURE__ */ progressRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, progressRecipeDefaultVariants, getSlotCompoundVariant(progressRecipeCompoundVariants, slotName))])

const progressRecipeFn = memo((props = {}) => {
  return Object.fromEntries(progressRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const progressRecipeVariantKeys = [
  "size",
  "thickness"
]
const getVariantProps = (variants) => ({ ...progressRecipeDefaultVariants, ...compact(variants) })

export const progressRecipe = /* @__PURE__ */ Object.assign(progressRecipeFn, {
  __recipe__: false,
  __name__: 'progressRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: progressRecipeVariantKeys,
  variantMap: {
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ],
  "thickness": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, progressRecipeVariantKeys)
  },
  getVariantProps
})