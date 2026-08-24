/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface HighlightRecipeVariant {
  /**
 * @default "primary"
 */
variant: "primary" | "secondary" | "tertiary" | "underline"
}

type HighlightRecipeVariantMap = {
  [key in keyof HighlightRecipeVariant]: Array<HighlightRecipeVariant[key]>
}



export type HighlightRecipeVariantProps = {
  [key in keyof HighlightRecipeVariant]?: ConditionalValue<HighlightRecipeVariant[key]> | undefined
}

export interface HighlightRecipeRecipe {
  
  __type: HighlightRecipeVariantProps
  (props?: HighlightRecipeVariantProps): string
  raw: (props?: HighlightRecipeVariantProps) => HighlightRecipeVariantProps
  variantMap: HighlightRecipeVariantMap
  variantKeys: Array<keyof HighlightRecipeVariant>
  splitVariantProps<Props extends HighlightRecipeVariantProps>(props: Props): [HighlightRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof HighlightRecipeVariantProps>>]
  getVariantProps: (props?: HighlightRecipeVariantProps) => HighlightRecipeVariantProps
}


export declare const highlightRecipe: HighlightRecipeRecipe