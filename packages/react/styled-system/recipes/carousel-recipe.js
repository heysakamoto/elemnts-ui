import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const carouselRecipeDefaultVariants = {}
const carouselRecipeCompoundVariants = []

const carouselRecipeSlotNames = [
  [
    "root",
    "carousel__root"
  ],
  [
    "indicator",
    "carousel__indicator"
  ],
  [
    "control",
    "carousel__control"
  ],
  [
    "item",
    "carousel__item"
  ],
  [
    "nextTrigger",
    "carousel__nextTrigger"
  ],
  [
    "prevTrigger",
    "carousel__prevTrigger"
  ],
  [
    "viewport",
    "carousel__viewport"
  ],
  [
    "itemGroup",
    "carousel__itemGroup"
  ],
  [
    "indicatorGroup",
    "carousel__indicatorGroup"
  ],
  [
    "autoplayTrigger",
    "carousel__autoplayTrigger"
  ],
  [
    "autoplayIndicator",
    "carousel__autoplayIndicator"
  ],
  [
    "progressText",
    "carousel__progressText"
  ]
]
const carouselRecipeSlotFns = /* @__PURE__ */ carouselRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, carouselRecipeDefaultVariants, getSlotCompoundVariant(carouselRecipeCompoundVariants, slotName))])

const carouselRecipeFn = memo((props = {}) => {
  return Object.fromEntries(carouselRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const carouselRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...carouselRecipeDefaultVariants, ...compact(variants) })

export const carouselRecipe = /* @__PURE__ */ Object.assign(carouselRecipeFn, {
  __recipe__: false,
  __name__: 'carouselRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: carouselRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, carouselRecipeVariantKeys)
  },
  getVariantProps
})