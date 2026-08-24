/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface AvatarRecipeVariant {
  /**
 * @default "md"
 */
size: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
/**
 * @default "primary"
 */
variant: "primary" | "secondary" | "tertiary" | "ghost" | "surface"
}

type AvatarRecipeVariantMap = {
  [key in keyof AvatarRecipeVariant]: Array<AvatarRecipeVariant[key]>
}

type AvatarRecipeSlot = "root" | "image" | "fallback"

export type AvatarRecipeVariantProps = {
  [key in keyof AvatarRecipeVariant]?: ConditionalValue<AvatarRecipeVariant[key]> | undefined
}

export interface AvatarRecipeRecipe {
  __slot: AvatarRecipeSlot
  __type: AvatarRecipeVariantProps
  (props?: AvatarRecipeVariantProps): Pretty<Record<AvatarRecipeSlot, string>>
  raw: (props?: AvatarRecipeVariantProps) => AvatarRecipeVariantProps
  variantMap: AvatarRecipeVariantMap
  variantKeys: Array<keyof AvatarRecipeVariant>
  splitVariantProps<Props extends AvatarRecipeVariantProps>(props: Props): [AvatarRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof AvatarRecipeVariantProps>>]
  getVariantProps: (props?: AvatarRecipeVariantProps) => AvatarRecipeVariantProps
}


export declare const avatarRecipe: AvatarRecipeRecipe