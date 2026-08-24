/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ThemeRecipeVariant {
  
}

type ThemeRecipeVariantMap = {
  [key in keyof ThemeRecipeVariant]: Array<ThemeRecipeVariant[key]>
}



export type ThemeRecipeVariantProps = {
  [key in keyof ThemeRecipeVariant]?: ConditionalValue<ThemeRecipeVariant[key]> | undefined
}

export interface ThemeRecipeRecipe {
  
  __type: ThemeRecipeVariantProps
  (props?: ThemeRecipeVariantProps): string
  raw: (props?: ThemeRecipeVariantProps) => ThemeRecipeVariantProps
  variantMap: ThemeRecipeVariantMap
  variantKeys: Array<keyof ThemeRecipeVariant>
  splitVariantProps<Props extends ThemeRecipeVariantProps>(props: Props): [ThemeRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof ThemeRecipeVariantProps>>]
  getVariantProps: (props?: ThemeRecipeVariantProps) => ThemeRecipeVariantProps
}


export declare const themeRecipe: ThemeRecipeRecipe