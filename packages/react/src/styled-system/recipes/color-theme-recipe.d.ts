/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ColorThemeRecipeVariant {
  
}

type ColorThemeRecipeVariantMap = {
  [key in keyof ColorThemeRecipeVariant]: Array<ColorThemeRecipeVariant[key]>
}

type ColorThemeRecipeSlot = "scope" | "trigger" | "indicator"

export type ColorThemeRecipeVariantProps = {
  [key in keyof ColorThemeRecipeVariant]?: ConditionalValue<ColorThemeRecipeVariant[key]> | undefined
}

export interface ColorThemeRecipeRecipe {
  __slot: ColorThemeRecipeSlot
  __type: ColorThemeRecipeVariantProps
  (props?: ColorThemeRecipeVariantProps): Pretty<Record<ColorThemeRecipeSlot, string>>
  raw: (props?: ColorThemeRecipeVariantProps) => ColorThemeRecipeVariantProps
  variantMap: ColorThemeRecipeVariantMap
  variantKeys: Array<keyof ColorThemeRecipeVariant>
  splitVariantProps<Props extends ColorThemeRecipeVariantProps>(props: Props): [ColorThemeRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof ColorThemeRecipeVariantProps>>]
  getVariantProps: (props?: ColorThemeRecipeVariantProps) => ColorThemeRecipeVariantProps
}


export declare const colorThemeRecipe: ColorThemeRecipeRecipe