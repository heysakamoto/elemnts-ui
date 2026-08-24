import type { ComponentProps } from "react";

import { Kbd } from "./kbd";
import { KbdGroupRoot, KbdGroupSeparator } from "./kbd-group";

export type KbdGroupRootProps = ComponentProps<typeof KbdGroupRoot>;
export type KbdGroupSeparatorProps = ComponentProps<typeof KbdGroupSeparator>;
export type KbdProps = ComponentProps<typeof Kbd>;

export const KbdGroup = Object.assign(KbdGroupRoot, {
  Root: KbdGroupRoot,
  Item: Kbd,
  Separator: KbdGroupSeparator,
});

export type KbdGroup = {
  RootProps: KbdGroupRootProps;
  ItemProps: ComponentProps<typeof Kbd>;
  SeparatorProps: KbdGroupSeparatorProps;
  Props: KbdGroupRootProps;
};

export { Kbd, KbdGroupRoot, KbdGroupSeparator };
