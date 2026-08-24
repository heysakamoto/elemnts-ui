/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface VisuallyHiddenRecipeVariant {
  
}

type VisuallyHiddenRecipeVariantMap = {
  [key in keyof VisuallyHiddenRecipeVariant]: Array<VisuallyHiddenRecipeVariant[key]>
}



export type VisuallyHiddenRecipeVariantProps = {
  [key in keyof VisuallyHiddenRecipeVariant]?: ConditionalValue<VisuallyHiddenRecipeVariant[key]> | undefined
}

export interface VisuallyHiddenRecipeRecipe {
  
  __type: VisuallyHiddenRecipeVariantProps
  (props?: VisuallyHiddenRecipeVariantProps): string
  raw: (props?: VisuallyHiddenRecipeVariantProps) => VisuallyHiddenRecipeVariantProps
  variantMap: VisuallyHiddenRecipeVariantMap
  variantKeys: Array<keyof VisuallyHiddenRecipeVariant>
  splitVariantProps<Props extends VisuallyHiddenRecipeVariantProps>(props: Props): [VisuallyHiddenRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof VisuallyHiddenRecipeVariantProps>>]
  getVariantProps: (props?: VisuallyHiddenRecipeVariantProps) => VisuallyHiddenRecipeVariantProps
}


export declare const visuallyHiddenRecipe: VisuallyHiddenRecipeRecipe