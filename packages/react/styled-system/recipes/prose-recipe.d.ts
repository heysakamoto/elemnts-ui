/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ProseRecipeVariant {
  
}

type ProseRecipeVariantMap = {
  [key in keyof ProseRecipeVariant]: Array<ProseRecipeVariant[key]>
}



export type ProseRecipeVariantProps = {
  [key in keyof ProseRecipeVariant]?: ConditionalValue<ProseRecipeVariant[key]> | undefined
}

export interface ProseRecipeRecipe {
  
  __type: ProseRecipeVariantProps
  (props?: ProseRecipeVariantProps): string
  raw: (props?: ProseRecipeVariantProps) => ProseRecipeVariantProps
  variantMap: ProseRecipeVariantMap
  variantKeys: Array<keyof ProseRecipeVariant>
  splitVariantProps<Props extends ProseRecipeVariantProps>(props: Props): [ProseRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof ProseRecipeVariantProps>>]
  getVariantProps: (props?: ProseRecipeVariantProps) => ProseRecipeVariantProps
}


export declare const proseRecipe: ProseRecipeRecipe