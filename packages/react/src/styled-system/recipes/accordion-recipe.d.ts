/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface AccordionRecipeVariant {
  
}

type AccordionRecipeVariantMap = {
  [key in keyof AccordionRecipeVariant]: Array<AccordionRecipeVariant[key]>
}

type AccordionRecipeSlot = "root" | "item" | "itemTrigger" | "itemContent" | "itemIndicator" | "separator"

export type AccordionRecipeVariantProps = {
  [key in keyof AccordionRecipeVariant]?: ConditionalValue<AccordionRecipeVariant[key]> | undefined
}

export interface AccordionRecipeRecipe {
  __slot: AccordionRecipeSlot
  __type: AccordionRecipeVariantProps
  (props?: AccordionRecipeVariantProps): Pretty<Record<AccordionRecipeSlot, string>>
  raw: (props?: AccordionRecipeVariantProps) => AccordionRecipeVariantProps
  variantMap: AccordionRecipeVariantMap
  variantKeys: Array<keyof AccordionRecipeVariant>
  splitVariantProps<Props extends AccordionRecipeVariantProps>(props: Props): [AccordionRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof AccordionRecipeVariantProps>>]
  getVariantProps: (props?: AccordionRecipeVariantProps) => AccordionRecipeVariantProps
}


export declare const accordionRecipe: AccordionRecipeRecipe