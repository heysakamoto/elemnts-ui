/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TextRecipeVariant {
  /**
 * @default false
 */
truncate: boolean
}

type TextRecipeVariantMap = {
  [key in keyof TextRecipeVariant]: Array<TextRecipeVariant[key]>
}



export type TextRecipeVariantProps = {
  [key in keyof TextRecipeVariant]?: ConditionalValue<TextRecipeVariant[key]> | undefined
}

export interface TextRecipeRecipe {
  
  __type: TextRecipeVariantProps
  (props?: TextRecipeVariantProps): string
  raw: (props?: TextRecipeVariantProps) => TextRecipeVariantProps
  variantMap: TextRecipeVariantMap
  variantKeys: Array<keyof TextRecipeVariant>
  splitVariantProps<Props extends TextRecipeVariantProps>(props: Props): [TextRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof TextRecipeVariantProps>>]
  getVariantProps: (props?: TextRecipeVariantProps) => TextRecipeVariantProps
}


export declare const textRecipe: TextRecipeRecipe