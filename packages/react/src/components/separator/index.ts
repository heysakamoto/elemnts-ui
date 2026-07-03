import type { ComponentProps } from "react";

import { Separator } from "./separator";
import { SeparatorGroupCaption, SeparatorGroupRoot } from "./separator-group";

export type SeparatorProps = ComponentProps<typeof Separator>;

export type SeparatorGroupRootProps = ComponentProps<typeof SeparatorGroupRoot>;
export type SeparatorGroupCaptionProps = ComponentProps<
	typeof SeparatorGroupCaption
>;

export const SeparatorGroup = Object.assign(SeparatorGroupRoot, {
	Item: Separator,
	Root: SeparatorGroupRoot,
	Caption: SeparatorGroupCaption,
});

export { Separator, SeparatorGroupCaption, SeparatorGroupRoot };
