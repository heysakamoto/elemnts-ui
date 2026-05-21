import type { ComponentProps } from "react";
import { Icon, InlineIcon } from "./icon";

export type IconProps = ComponentProps<typeof Icon>;
export type InlineIconProps = ComponentProps<typeof InlineIcon>;

export {
	addAPIProvider,
	addCollection,
	addIcon,
	buildIcon,
	calculateSize,
	getIcon,
	iconLoaded,
	listIcons,
	loadIcon,
	loadIcons,
	replaceIDs,
	setCustomIconLoader,
	setCustomIconsLoader,
} from "@iconify/react";

export { Icon, InlineIcon };
