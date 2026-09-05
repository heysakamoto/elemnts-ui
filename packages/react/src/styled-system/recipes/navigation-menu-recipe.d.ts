/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface NavigationMenuRecipeVariant {
  
}

type NavigationMenuRecipeVariantMap = {
  [key in keyof NavigationMenuRecipeVariant]: Array<NavigationMenuRecipeVariant[key]>
}

type NavigationMenuRecipeSlot = "root" | "list" | "item" | "trigger" | "link" | "arrow" | "indicator" | "itemIndicator" | "viewport" | "viewportPositioner" | "content"

export type NavigationMenuRecipeVariantProps = {
  [key in keyof NavigationMenuRecipeVariant]?: ConditionalValue<NavigationMenuRecipeVariant[key]> | undefined
}

export interface NavigationMenuRecipeRecipe {
  __slot: NavigationMenuRecipeSlot
  __type: NavigationMenuRecipeVariantProps
  (props?: NavigationMenuRecipeVariantProps): Pretty<Record<NavigationMenuRecipeSlot, string>>
  raw: (props?: NavigationMenuRecipeVariantProps) => NavigationMenuRecipeVariantProps
  variantMap: NavigationMenuRecipeVariantMap
  variantKeys: Array<keyof NavigationMenuRecipeVariant>
  splitVariantProps<Props extends NavigationMenuRecipeVariantProps>(props: Props): [NavigationMenuRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof NavigationMenuRecipeVariantProps>>]
  getVariantProps: (props?: NavigationMenuRecipeVariantProps) => NavigationMenuRecipeVariantProps
}


export declare const navigationMenuRecipe: NavigationMenuRecipeRecipe