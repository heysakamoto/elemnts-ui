/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface BadgeRecipeVariant {
  /**
 * @default "md"
 */
size: "xs" | "sm" | "md" | "lg" | "xl"
/**
 * @default "bottom-right"
 */
placement: "top-left" | "top-right" | "bottom-left" | "bottom-right"
/**
 * @default "primary"
 */
variant: "primary" | "secondary"
}

type BadgeRecipeVariantMap = {
  [key in keyof BadgeRecipeVariant]: Array<BadgeRecipeVariant[key]>
}

type BadgeRecipeSlot = "root" | "indicator"

export type BadgeRecipeVariantProps = {
  [key in keyof BadgeRecipeVariant]?: ConditionalValue<BadgeRecipeVariant[key]> | undefined
}

export interface BadgeRecipeRecipe {
  __slot: BadgeRecipeSlot
  __type: BadgeRecipeVariantProps
  (props?: BadgeRecipeVariantProps): Pretty<Record<BadgeRecipeSlot, string>>
  raw: (props?: BadgeRecipeVariantProps) => BadgeRecipeVariantProps
  variantMap: BadgeRecipeVariantMap
  variantKeys: Array<keyof BadgeRecipeVariant>
  splitVariantProps<Props extends BadgeRecipeVariantProps>(props: Props): [BadgeRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof BadgeRecipeVariantProps>>]
  getVariantProps: (props?: BadgeRecipeVariantProps) => BadgeRecipeVariantProps
}


export declare const badgeRecipe: BadgeRecipeRecipe