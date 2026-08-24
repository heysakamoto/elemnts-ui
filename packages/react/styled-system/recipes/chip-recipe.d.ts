/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ChipRecipeVariant {
  /**
 * @default "md"
 */
size: "2xs" | "xs" | "sm" | "md" | "lg" | "xl"
/**
 * @default "primary"
 */
variant: "primary" | "secondary" | "tertiary" | "ghost" | "surface"
/**
 * @default false
 */
iconOnly: boolean
}

type ChipRecipeVariantMap = {
  [key in keyof ChipRecipeVariant]: Array<ChipRecipeVariant[key]>
}



export type ChipRecipeVariantProps = {
  [key in keyof ChipRecipeVariant]?: ConditionalValue<ChipRecipeVariant[key]> | undefined
}

export interface ChipRecipeRecipe {
  
  __type: ChipRecipeVariantProps
  (props?: ChipRecipeVariantProps): string
  raw: (props?: ChipRecipeVariantProps) => ChipRecipeVariantProps
  variantMap: ChipRecipeVariantMap
  variantKeys: Array<keyof ChipRecipeVariant>
  splitVariantProps<Props extends ChipRecipeVariantProps>(props: Props): [ChipRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof ChipRecipeVariantProps>>]
  getVariantProps: (props?: ChipRecipeVariantProps) => ChipRecipeVariantProps
}


export declare const chipRecipe: ChipRecipeRecipe