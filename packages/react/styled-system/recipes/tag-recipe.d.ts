/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TagRecipeVariant {
  /**
 * @default "md"
 */
size: "xs" | "sm" | "md" | "lg" | "xl"
/**
 * @default "primary"
 */
variant: "primary" | "secondary" | "tertiary"
/**
 * @default false
 */
iconOnly: boolean
}

type TagRecipeVariantMap = {
  [key in keyof TagRecipeVariant]: Array<TagRecipeVariant[key]>
}



export type TagRecipeVariantProps = {
  [key in keyof TagRecipeVariant]?: ConditionalValue<TagRecipeVariant[key]> | undefined
}

export interface TagRecipeRecipe {
  
  __type: TagRecipeVariantProps
  (props?: TagRecipeVariantProps): string
  raw: (props?: TagRecipeVariantProps) => TagRecipeVariantProps
  variantMap: TagRecipeVariantMap
  variantKeys: Array<keyof TagRecipeVariant>
  splitVariantProps<Props extends TagRecipeVariantProps>(props: Props): [TagRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof TagRecipeVariantProps>>]
  getVariantProps: (props?: TagRecipeVariantProps) => TagRecipeVariantProps
}


export declare const tagRecipe: TagRecipeRecipe