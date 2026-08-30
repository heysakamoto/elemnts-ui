import type { ComponentProps } from "react";

import {
	SidebarAddon,
	SidebarContext,
	SidebarGroup,
	SidebarItem,
	SidebarLabel,
	SidebarList,
	SidebarNav,
	SidebarRoot,
	SidebarRootProvider,
	SidebarTrigger,
} from "./sidebar";

export type SidebarContextProps = ComponentProps<typeof SidebarContext>;
export type SidebarRootProps = ComponentProps<typeof SidebarRoot>;
export type SidebarRootProviderProps = ComponentProps<
	typeof SidebarRootProvider
>;
export type SidebarAddonProps = ComponentProps<typeof SidebarAddon>;
export type SidebarNavProps = ComponentProps<typeof SidebarNav>;
export type SidebarGroupProps = ComponentProps<typeof SidebarGroup>;
export type SidebarLabelProps = ComponentProps<typeof SidebarLabel>;
export type SidebarItemProps = ComponentProps<typeof SidebarItem>;
export type SidebarListProps = ComponentProps<typeof SidebarList>;
export type SidebarTriggerProps = ComponentProps<typeof SidebarTrigger>;

export const Sidebar = Object.assign(SidebarRoot, {
	Addon: SidebarAddon,
	Group: SidebarGroup,
	Label: SidebarLabel,
	Nav: SidebarNav,
	Item: SidebarItem,
	RootProvider: SidebarRootProvider,
	Root: SidebarRoot,
	Context: SidebarContext,
	List: SidebarList,
	Trigger: SidebarTrigger,
});

export type Sidebar = {
	Props: SidebarRootProps;
	RootProps: SidebarRootProps;
	RootProviderProps: SidebarRootProviderProps;
	LabelProps: SidebarLabelProps;
	GroupProps: SidebarGroupProps;
	AddonProps: SidebarAddonProps;
	NavProps: SidebarNavProps;
	ItemProps: SidebarItemProps;
	ListProps: SidebarListProps;
	ContextProps: SidebarContextProps;
	TriggerProps: SidebarTriggerProps;
};

export { useSidebar, useSidebarContext } from "./client";
export {
	SidebarAddon,
	SidebarContext,
	SidebarGroup,
	SidebarItem,
	SidebarLabel,
	SidebarList,
	SidebarNav,
	SidebarRoot,
	SidebarRootProvider,
	SidebarTrigger,
};
