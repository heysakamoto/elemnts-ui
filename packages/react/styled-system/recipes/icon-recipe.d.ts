/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface IconRecipeVariant {
  
}

type IconRecipeVariantMap = {
  [key in keyof IconRecipeVariant]: Array<IconRecipeVariant[key]>
}



export type IconRecipeVariantProps = {
  [key in keyof IconRecipeVariant]?: ConditionalValue<IconRecipeVariant[key]> | undefined
}

export interface IconRecipeRecipe {
  
  __type: IconRecipeVariantProps
  (props?: IconRecipeVariantProps): string
  raw: (props?: IconRecipeVariantProps) => IconRecipeVariantProps
  variantMap: IconRecipeVariantMap
  variantKeys: Array<keyof IconRecipeVariant>
  splitVariantProps<Props extends IconRecipeVariantProps>(props: Props): [IconRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof IconRecipeVariantProps>>]
  getVariantProps: (props?: IconRecipeVariantProps) => IconRecipeVariantProps
}


export declare const iconRecipe: IconRecipeRecipe