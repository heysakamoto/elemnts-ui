/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SidebarRecipeVariant {
  
}

type SidebarRecipeVariantMap = {
  [key in keyof SidebarRecipeVariant]: Array<SidebarRecipeVariant[key]>
}

type SidebarRecipeSlot = "root" | "header" | "addon" | "nav" | "list" | "group" | "item" | "trigger" | "label"

export type SidebarRecipeVariantProps = {
  [key in keyof SidebarRecipeVariant]?: ConditionalValue<SidebarRecipeVariant[key]> | undefined
}

export interface SidebarRecipeRecipe {
  __slot: SidebarRecipeSlot
  __type: SidebarRecipeVariantProps
  (props?: SidebarRecipeVariantProps): Pretty<Record<SidebarRecipeSlot, string>>
  raw: (props?: SidebarRecipeVariantProps) => SidebarRecipeVariantProps
  variantMap: SidebarRecipeVariantMap
  variantKeys: Array<keyof SidebarRecipeVariant>
  splitVariantProps<Props extends SidebarRecipeVariantProps>(props: Props): [SidebarRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof SidebarRecipeVariantProps>>]
  getVariantProps: (props?: SidebarRecipeVariantProps) => SidebarRecipeVariantProps
}


export declare const sidebarRecipe: SidebarRecipeRecipe