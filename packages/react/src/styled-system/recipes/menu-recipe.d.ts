/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface MenuRecipeVariant {
  
}

type MenuRecipeVariantMap = {
  [key in keyof MenuRecipeVariant]: Array<MenuRecipeVariant[key]>
}

type MenuRecipeSlot = "content" | "separator" | "trigger" | "indicator" | "item" | "itemText" | "itemGroup" | "itemIndicator" | "itemGroupLabel" | "arrow" | "arrowTip" | "contextTrigger" | "positioner" | "triggerItem" | "radioItemGroup" | "radioItem" | "checkboxItem"

export type MenuRecipeVariantProps = {
  [key in keyof MenuRecipeVariant]?: ConditionalValue<MenuRecipeVariant[key]> | undefined
}

export interface MenuRecipeRecipe {
  __slot: MenuRecipeSlot
  __type: MenuRecipeVariantProps
  (props?: MenuRecipeVariantProps): Pretty<Record<MenuRecipeSlot, string>>
  raw: (props?: MenuRecipeVariantProps) => MenuRecipeVariantProps
  variantMap: MenuRecipeVariantMap
  variantKeys: Array<keyof MenuRecipeVariant>
  splitVariantProps<Props extends MenuRecipeVariantProps>(props: Props): [MenuRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof MenuRecipeVariantProps>>]
  getVariantProps: (props?: MenuRecipeVariantProps) => MenuRecipeVariantProps
}


export declare const menuRecipe: MenuRecipeRecipe