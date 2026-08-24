/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface BoxRecipeVariant {
  
}

type BoxRecipeVariantMap = {
  [key in keyof BoxRecipeVariant]: Array<BoxRecipeVariant[key]>
}



export type BoxRecipeVariantProps = {
  [key in keyof BoxRecipeVariant]?: ConditionalValue<BoxRecipeVariant[key]> | undefined
}

export interface BoxRecipeRecipe {
  
  __type: BoxRecipeVariantProps
  (props?: BoxRecipeVariantProps): string
  raw: (props?: BoxRecipeVariantProps) => BoxRecipeVariantProps
  variantMap: BoxRecipeVariantMap
  variantKeys: Array<keyof BoxRecipeVariant>
  splitVariantProps<Props extends BoxRecipeVariantProps>(props: Props): [BoxRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof BoxRecipeVariantProps>>]
  getVariantProps: (props?: BoxRecipeVariantProps) => BoxRecipeVariantProps
}


export declare const boxRecipe: BoxRecipeRecipe