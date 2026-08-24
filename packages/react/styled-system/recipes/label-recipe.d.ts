/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface LabelRecipeVariant {
  
}

type LabelRecipeVariantMap = {
  [key in keyof LabelRecipeVariant]: Array<LabelRecipeVariant[key]>
}



export type LabelRecipeVariantProps = {
  [key in keyof LabelRecipeVariant]?: ConditionalValue<LabelRecipeVariant[key]> | undefined
}

export interface LabelRecipeRecipe {
  
  __type: LabelRecipeVariantProps
  (props?: LabelRecipeVariantProps): string
  raw: (props?: LabelRecipeVariantProps) => LabelRecipeVariantProps
  variantMap: LabelRecipeVariantMap
  variantKeys: Array<keyof LabelRecipeVariant>
  splitVariantProps<Props extends LabelRecipeVariantProps>(props: Props): [LabelRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof LabelRecipeVariantProps>>]
  getVariantProps: (props?: LabelRecipeVariantProps) => LabelRecipeVariantProps
}


export declare const labelRecipe: LabelRecipeRecipe