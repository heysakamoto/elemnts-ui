import type { ComponentProps } from "react";

import { BadgeIndicator, BadgeRoot } from "./badge";

export type BadgeIndicatorProps = ComponentProps<typeof BadgeIndicator>;
export type BadgeRootProps = ComponentProps<typeof BadgeRoot>;

export const Badge = Object.assign(BadgeRoot, {
	Indicator: BadgeIndicator,
	Root: BadgeRoot,
});

export type Badge = {
	RootProps: BadgeRootProps;
	IndicatorProps: BadgeIndicatorProps;
	Props: BadgeRootProps;
};

export { BadgeIndicator, BadgeRoot };
