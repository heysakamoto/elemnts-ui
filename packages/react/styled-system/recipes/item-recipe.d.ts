/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ItemRecipeVariant {
  /**
 * @default "md"
 */
size: "xs" | "sm" | "md" | "lg" | "xl"
/**
 * @default "primary"
 */
variant: "primary" | "secondary" | "tertiary" | "surface"
/**
 * @default false
 */
iconOnly: boolean
}

type ItemRecipeVariantMap = {
  [key in keyof ItemRecipeVariant]: Array<ItemRecipeVariant[key]>
}



export type ItemRecipeVariantProps = {
  [key in keyof ItemRecipeVariant]?: ConditionalValue<ItemRecipeVariant[key]> | undefined
}

export interface ItemRecipeRecipe {
  
  __type: ItemRecipeVariantProps
  (props?: ItemRecipeVariantProps): string
  raw: (props?: ItemRecipeVariantProps) => ItemRecipeVariantProps
  variantMap: ItemRecipeVariantMap
  variantKeys: Array<keyof ItemRecipeVariant>
  splitVariantProps<Props extends ItemRecipeVariantProps>(props: Props): [ItemRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof ItemRecipeVariantProps>>]
  getVariantProps: (props?: ItemRecipeVariantProps) => ItemRecipeVariantProps
}


export declare const itemRecipe: ItemRecipeRecipe