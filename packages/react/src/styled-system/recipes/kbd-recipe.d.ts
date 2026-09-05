/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface KbdRecipeVariant {
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

type KbdRecipeVariantMap = {
  [key in keyof KbdRecipeVariant]: Array<KbdRecipeVariant[key]>
}



export type KbdRecipeVariantProps = {
  [key in keyof KbdRecipeVariant]?: ConditionalValue<KbdRecipeVariant[key]> | undefined
}

export interface KbdRecipeRecipe {
  
  __type: KbdRecipeVariantProps
  (props?: KbdRecipeVariantProps): string
  raw: (props?: KbdRecipeVariantProps) => KbdRecipeVariantProps
  variantMap: KbdRecipeVariantMap
  variantKeys: Array<keyof KbdRecipeVariant>
  splitVariantProps<Props extends KbdRecipeVariantProps>(props: Props): [KbdRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof KbdRecipeVariantProps>>]
  getVariantProps: (props?: KbdRecipeVariantProps) => KbdRecipeVariantProps
}


export declare const kbdRecipe: KbdRecipeRecipe