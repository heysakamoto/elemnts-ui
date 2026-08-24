/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface StackRecipeVariant {
  /**
 * @default false
 */
inline: boolean
}

type StackRecipeVariantMap = {
  [key in keyof StackRecipeVariant]: Array<StackRecipeVariant[key]>
}



export type StackRecipeVariantProps = {
  [key in keyof StackRecipeVariant]?: ConditionalValue<StackRecipeVariant[key]> | undefined
}

export interface StackRecipeRecipe {
  
  __type: StackRecipeVariantProps
  (props?: StackRecipeVariantProps): string
  raw: (props?: StackRecipeVariantProps) => StackRecipeVariantProps
  variantMap: StackRecipeVariantMap
  variantKeys: Array<keyof StackRecipeVariant>
  splitVariantProps<Props extends StackRecipeVariantProps>(props: Props): [StackRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof StackRecipeVariantProps>>]
  getVariantProps: (props?: StackRecipeVariantProps) => StackRecipeVariantProps
}


export declare const stackRecipe: StackRecipeRecipe