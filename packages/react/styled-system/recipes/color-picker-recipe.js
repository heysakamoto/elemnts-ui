import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const colorPickerRecipeDefaultVariants = {}
const colorPickerRecipeCompoundVariants = []

const colorPickerRecipeSlotNames = [
  [
    "root",
    "color__root"
  ],
  [
    "trigger",
    "color__trigger"
  ],
  [
    "content",
    "color__content"
  ],
  [
    "control",
    "color__control"
  ],
  [
    "label",
    "color__label"
  ],
  [
    "area",
    "color__area"
  ],
  [
    "positioner",
    "color__positioner"
  ],
  [
    "areaThumb",
    "color__areaThumb"
  ],
  [
    "valueText",
    "color__valueText"
  ],
  [
    "areaBackground",
    "color__areaBackground"
  ],
  [
    "channelSlider",
    "color__channelSlider"
  ],
  [
    "channelSliderLabel",
    "color__channelSliderLabel"
  ],
  [
    "channelSliderTrack",
    "color__channelSliderTrack"
  ],
  [
    "channelSliderThumb",
    "color__channelSliderThumb"
  ],
  [
    "channelSliderValueText",
    "color__channelSliderValueText"
  ],
  [
    "channelInput",
    "color__channelInput"
  ],
  [
    "transparencyGrid",
    "color__transparencyGrid"
  ],
  [
    "swatchGroup",
    "color__swatchGroup"
  ],
  [
    "swatchTrigger",
    "color__swatchTrigger"
  ],
  [
    "swatchIndicator",
    "color__swatchIndicator"
  ],
  [
    "swatch",
    "color__swatch"
  ],
  [
    "eyeDropperTrigger",
    "color__eyeDropperTrigger"
  ],
  [
    "formatTrigger",
    "color__formatTrigger"
  ],
  [
    "formatSelect",
    "color__formatSelect"
  ],
  [
    "view",
    "color__view"
  ],
  [
    "channelSliderControl",
    "color__channelSliderControl"
  ]
]
const colorPickerRecipeSlotFns = /* @__PURE__ */ colorPickerRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, colorPickerRecipeDefaultVariants, getSlotCompoundVariant(colorPickerRecipeCompoundVariants, slotName))])

const colorPickerRecipeFn = memo((props = {}) => {
  return Object.fromEntries(colorPickerRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const colorPickerRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...colorPickerRecipeDefaultVariants, ...compact(variants) })

export const colorPickerRecipe = /* @__PURE__ */ Object.assign(colorPickerRecipeFn, {
  __recipe__: false,
  __name__: 'colorPickerRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: colorPickerRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, colorPickerRecipeVariantKeys)
  },
  getVariantProps
})