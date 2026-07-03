import type { ComponentProps } from "react";

import { SkipNavContent, SkipNavLink, SkipNavRoot } from "./skip-nav";

export type SkipNavRootProps = ComponentProps<typeof SkipNavRoot>;
export type SkipNavContentProps = ComponentProps<typeof SkipNavContent>;
export type SkipNavLinkProps = ComponentProps<typeof SkipNavLink>;

export type SkipNavProps = {
	RootProps: SkipNavRootProps;
	ContentProps: SkipNavContentProps;
	LinkProps: SkipNavLinkProps;
	Props: SkipNavRootProps;
};

export const SkipNav = Object.assign(SkipNavRoot, {
	Root: SkipNavRoot,
	Link: SkipNavLink,
	Content: SkipNavContent,
});

export { SkipNavContent, SkipNavLink, SkipNavRoot };
