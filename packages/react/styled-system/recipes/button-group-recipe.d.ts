/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ButtonGroupRecipeVariant {
  /**
 * @default false
 */
fullWidth: boolean
/**
 * @default false
 */
attached: boolean
/**
 * @default "horizontal"
 */
orientation: "horizontal" | "vertical"
}

type ButtonGroupRecipeVariantMap = {
  [key in keyof ButtonGroupRecipeVariant]: Array<ButtonGroupRecipeVariant[key]>
}

type ButtonGroupRecipeSlot = "root" | "separator"

export type ButtonGroupRecipeVariantProps = {
  [key in keyof ButtonGroupRecipeVariant]?: ButtonGroupRecipeVariant[key] | undefined
}

export interface ButtonGroupRecipeRecipe {
  __slot: ButtonGroupRecipeSlot
  __type: ButtonGroupRecipeVariantProps
  (props?: ButtonGroupRecipeVariantProps): Pretty<Record<ButtonGroupRecipeSlot, string>>
  raw: (props?: ButtonGroupRecipeVariantProps) => ButtonGroupRecipeVariantProps
  variantMap: ButtonGroupRecipeVariantMap
  variantKeys: Array<keyof ButtonGroupRecipeVariant>
  splitVariantProps<Props extends ButtonGroupRecipeVariantProps>(props: Props): [ButtonGroupRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof ButtonGroupRecipeVariantProps>>]
  getVariantProps: (props?: ButtonGroupRecipeVariantProps) => ButtonGroupRecipeVariantProps
}

/**
 * A container for grouping related buttons
 */
export declare const buttonGroupRecipe: ButtonGroupRecipeRecipe