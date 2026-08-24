/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SwatchRecipeVariant {
  /**
 * @default "md"
 */
size: "xs" | "sm" | "md" | "lg" | "xl"
}

type SwatchRecipeVariantMap = {
  [key in keyof SwatchRecipeVariant]: Array<SwatchRecipeVariant[key]>
}



export type SwatchRecipeVariantProps = {
  [key in keyof SwatchRecipeVariant]?: ConditionalValue<SwatchRecipeVariant[key]> | undefined
}

export interface SwatchRecipeRecipe {
  
  __type: SwatchRecipeVariantProps
  (props?: SwatchRecipeVariantProps): string
  raw: (props?: SwatchRecipeVariantProps) => SwatchRecipeVariantProps
  variantMap: SwatchRecipeVariantMap
  variantKeys: Array<keyof SwatchRecipeVariant>
  splitVariantProps<Props extends SwatchRecipeVariantProps>(props: Props): [SwatchRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof SwatchRecipeVariantProps>>]
  getVariantProps: (props?: SwatchRecipeVariantProps) => SwatchRecipeVariantProps
}


export declare const swatchRecipe: SwatchRecipeRecipe