/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface DecorativeBoxRecipeVariant {
  /**
 * @default "primary"
 */
variant: "secondary" | "primary"
}

type DecorativeBoxRecipeVariantMap = {
  [key in keyof DecorativeBoxRecipeVariant]: Array<DecorativeBoxRecipeVariant[key]>
}



export type DecorativeBoxRecipeVariantProps = {
  [key in keyof DecorativeBoxRecipeVariant]?: ConditionalValue<DecorativeBoxRecipeVariant[key]> | undefined
}

export interface DecorativeBoxRecipeRecipe {
  
  __type: DecorativeBoxRecipeVariantProps
  (props?: DecorativeBoxRecipeVariantProps): string
  raw: (props?: DecorativeBoxRecipeVariantProps) => DecorativeBoxRecipeVariantProps
  variantMap: DecorativeBoxRecipeVariantMap
  variantKeys: Array<keyof DecorativeBoxRecipeVariant>
  splitVariantProps<Props extends DecorativeBoxRecipeVariantProps>(props: Props): [DecorativeBoxRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof DecorativeBoxRecipeVariantProps>>]
  getVariantProps: (props?: DecorativeBoxRecipeVariantProps) => DecorativeBoxRecipeVariantProps
}


export declare const decorativeBoxRecipe: DecorativeBoxRecipeRecipe