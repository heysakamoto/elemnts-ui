/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ScrollAreaRecipeVariant {
  /**
 * @default "hover"
 */
variant: "hover" | "always"
/**
 * @default "sm"
 */
size: "xs" | "sm" | "md" | "lg" | "xl"
}

type ScrollAreaRecipeVariantMap = {
  [key in keyof ScrollAreaRecipeVariant]: Array<ScrollAreaRecipeVariant[key]>
}

type ScrollAreaRecipeSlot = "root" | "viewport" | "content" | "scrollbar" | "thumb" | "corner"

export type ScrollAreaRecipeVariantProps = {
  [key in keyof ScrollAreaRecipeVariant]?: ConditionalValue<ScrollAreaRecipeVariant[key]> | undefined
}

export interface ScrollAreaRecipeRecipe {
  __slot: ScrollAreaRecipeSlot
  __type: ScrollAreaRecipeVariantProps
  (props?: ScrollAreaRecipeVariantProps): Pretty<Record<ScrollAreaRecipeSlot, string>>
  raw: (props?: ScrollAreaRecipeVariantProps) => ScrollAreaRecipeVariantProps
  variantMap: ScrollAreaRecipeVariantMap
  variantKeys: Array<keyof ScrollAreaRecipeVariant>
  splitVariantProps<Props extends ScrollAreaRecipeVariantProps>(props: Props): [ScrollAreaRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof ScrollAreaRecipeVariantProps>>]
  getVariantProps: (props?: ScrollAreaRecipeVariantProps) => ScrollAreaRecipeVariantProps
}


export declare const scrollAreaRecipe: ScrollAreaRecipeRecipe