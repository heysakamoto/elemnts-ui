/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface AnchorRecipeVariant {
  /**
 * @default "primary"
 */
variant: "primary" | "secondary" | "tertiary"
}

type AnchorRecipeVariantMap = {
  [key in keyof AnchorRecipeVariant]: Array<AnchorRecipeVariant[key]>
}



export type AnchorRecipeVariantProps = {
  [key in keyof AnchorRecipeVariant]?: ConditionalValue<AnchorRecipeVariant[key]> | undefined
}

export interface AnchorRecipeRecipe {
  
  __type: AnchorRecipeVariantProps
  (props?: AnchorRecipeVariantProps): string
  raw: (props?: AnchorRecipeVariantProps) => AnchorRecipeVariantProps
  variantMap: AnchorRecipeVariantMap
  variantKeys: Array<keyof AnchorRecipeVariant>
  splitVariantProps<Props extends AnchorRecipeVariantProps>(props: Props): [AnchorRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof AnchorRecipeVariantProps>>]
  getVariantProps: (props?: AnchorRecipeVariantProps) => AnchorRecipeVariantProps
}


export declare const anchorRecipe: AnchorRecipeRecipe