/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface RadiomarkRecipeVariant {
  /**
 * @default "md"
 */
size: "xs" | "sm" | "md" | "lg" | "xl"
}

type RadiomarkRecipeVariantMap = {
  [key in keyof RadiomarkRecipeVariant]: Array<RadiomarkRecipeVariant[key]>
}



export type RadiomarkRecipeVariantProps = {
  [key in keyof RadiomarkRecipeVariant]?: ConditionalValue<RadiomarkRecipeVariant[key]> | undefined
}

export interface RadiomarkRecipeRecipe {
  
  __type: RadiomarkRecipeVariantProps
  (props?: RadiomarkRecipeVariantProps): string
  raw: (props?: RadiomarkRecipeVariantProps) => RadiomarkRecipeVariantProps
  variantMap: RadiomarkRecipeVariantMap
  variantKeys: Array<keyof RadiomarkRecipeVariant>
  splitVariantProps<Props extends RadiomarkRecipeVariantProps>(props: Props): [RadiomarkRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof RadiomarkRecipeVariantProps>>]
  getVariantProps: (props?: RadiomarkRecipeVariantProps) => RadiomarkRecipeVariantProps
}


export declare const radiomarkRecipe: RadiomarkRecipeRecipe