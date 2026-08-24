import {
	Icon as UnstyledIcon,
	InlineIcon as UnstyledInlineIcon,
} from "@iconify/react";

import { styled } from "../../../styled-system/jsx";
import { iconRecipe } from "../../../styled-system/recipes";

export const Icon = styled(UnstyledIcon, iconRecipe, {
	forwardProps: ["width", "height", "icon"],
});
Icon.displayName = "Icon";

export const InlineIcon = styled(UnstyledInlineIcon, iconRecipe, {
	forwardProps: ["width", "height", "icon"],
});
InlineIcon.displayName = "InlineIcon";
