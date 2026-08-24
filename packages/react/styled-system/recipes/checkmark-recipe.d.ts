/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface CheckmarkRecipeVariant {
  /**
 * @default "md"
 */
size: "xs" | "sm" | "md" | "lg" | "xl"
/**
 * @default "primary"
 */
variant: "primary" | "secondary" | "tertiary" | "ghost"
}

type CheckmarkRecipeVariantMap = {
  [key in keyof CheckmarkRecipeVariant]: Array<CheckmarkRecipeVariant[key]>
}



export type CheckmarkRecipeVariantProps = {
  [key in keyof CheckmarkRecipeVariant]?: ConditionalValue<CheckmarkRecipeVariant[key]> | undefined
}

export interface CheckmarkRecipeRecipe {
  
  __type: CheckmarkRecipeVariantProps
  (props?: CheckmarkRecipeVariantProps): string
  raw: (props?: CheckmarkRecipeVariantProps) => CheckmarkRecipeVariantProps
  variantMap: CheckmarkRecipeVariantMap
  variantKeys: Array<keyof CheckmarkRecipeVariant>
  splitVariantProps<Props extends CheckmarkRecipeVariantProps>(props: Props): [CheckmarkRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof CheckmarkRecipeVariantProps>>]
  getVariantProps: (props?: CheckmarkRecipeVariantProps) => CheckmarkRecipeVariantProps
}


export declare const checkmarkRecipe: CheckmarkRecipeRecipe