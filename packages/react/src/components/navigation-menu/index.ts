import type { ComponentProps } from "react";
import {
	NavigationMenuArrow,
	NavigationMenuContent,
	NavigationMenuContext,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuItemIndicator,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuRoot,
	NavigationMenuRootProvider,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	NavigationMenuViewportPositioner,
} from "./navigation-menu";

export type NavigationMenuRootProviderProps = ComponentProps<
	typeof NavigationMenuRootProvider
>;
export type NavigationMenuArrowProps = ComponentProps<
	typeof NavigationMenuArrow
>;
export type NavigationMenuContentProps = ComponentProps<
	typeof NavigationMenuContent
>;
export type NavigationMenuContextProps = ComponentProps<
	typeof NavigationMenuContext
>;
export type NavigationMenuIndicatorProps = ComponentProps<
	typeof NavigationMenuIndicator
>;
export type NavigationMenuItemProps = ComponentProps<typeof NavigationMenuItem>;
export type NavigationMenuItemIndicatorProps = ComponentProps<
	typeof NavigationMenuItemIndicator
>;
export type NavigationMenuLinkProps = ComponentProps<typeof NavigationMenuLink>;
export type NavigationMenuListProps = ComponentProps<typeof NavigationMenuList>;
export type NavigationMenuRootProps = ComponentProps<typeof NavigationMenuRoot>;
export type NavigationMenuTriggerProps = ComponentProps<
	typeof NavigationMenuTrigger
>;
export type NavigationMenuViewportProps = ComponentProps<
	typeof NavigationMenuViewport
>;
export type NavigationMenuViewportPositionerProps = ComponentProps<
	typeof NavigationMenuViewportPositioner
>;

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
	Root: NavigationMenuRoot,
	Arrow: NavigationMenuArrow,
	List: NavigationMenuList,
	Item: NavigationMenuItem,
	Link: NavigationMenuLink,
	Indicator: NavigationMenuItemIndicator,
	Content: NavigationMenuContent,
	ItemIndicator: NavigationMenuIndicator,
	Trigger: NavigationMenuTrigger,
	Viewport: NavigationMenuViewport,
	ViewportPositioner: NavigationMenuViewportPositioner,
	Context: NavigationMenuContext,
	RootProvider: NavigationMenuRootProvider,
});

export type NavigationMenu = {
	Props: NavigationMenuRootProps;
	RootProps: NavigationMenuRootProps;
	RootProviderProps: NavigationMenuRootProviderProps;
	TriggerProps: NavigationMenuTriggerProps;
	ArrowProps: NavigationMenuArrowProps;
	ContentProps: NavigationMenuContentProps;
	ListProps: NavigationMenuListProps;
	LinkProps: NavigationMenuLinkProps;
	ContextProps: NavigationMenuContextProps;
	ItemProps: NavigationMenuItemProps;
	ViewportProps: NavigationMenuViewportProps;
	IndicatorProps: NavigationMenuIndicatorProps;
	ViewportPositionerProps: NavigationMenuViewportPositionerProps;
	ItemIndicatorProps: NavigationMenuItemIndicatorProps;
};

export {
	type UseNavigationMenuContext,
	type UseNavigationMenuProps,
	type UseNavigationMenuReturn,
	useNavigationMenu,
	useNavigationMenuContext,
} from "@ark-ui/react/navigation-menu";

export {
	NavigationMenuArrow,
	NavigationMenuContent,
	NavigationMenuContext,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuItemIndicator,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuRoot,
	NavigationMenuRootProvider,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	NavigationMenuViewportPositioner,
};
