import type { ComponentProps } from "react";

import {
	SidebarContent,
	SidebarContext,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarItem,
	SidebarRoot,
	SidebarRootProvider,
	SidebarTrigger,
} from "./sidebar";

export type SidebarContextProps = ComponentProps<typeof SidebarContext>;
export type SidebarRootProps = ComponentProps<typeof SidebarRoot>;
export type SidebarRootProviderProps = ComponentProps<
	typeof SidebarRootProvider
>;
export type SidebarContentProps = ComponentProps<typeof SidebarContent>;
export type SidebarFooterProps = ComponentProps<typeof SidebarFooter>;
export type SidebarGroupProps = ComponentProps<typeof SidebarGroup>;
export type SidebarHeaderProps = ComponentProps<typeof SidebarHeader>;
export type SidebarItemProps = ComponentProps<typeof SidebarItem>;
export type SidebarTriggerProps = ComponentProps<typeof SidebarTrigger>;

export const Sidebar = Object.assign(SidebarRoot, {
	Content: SidebarContent,
	Footer: SidebarFooter,
	Group: SidebarGroup,
	Header: SidebarHeader,
	Item: SidebarItem,
	RootProvider: SidebarRootProvider,
	Root: SidebarRoot,
	Context: SidebarContext,
	Trigger: SidebarTrigger,
});

export type Sidebar = {
	Props: SidebarRootProps;
	RootProps: SidebarRootProps;
	RootProviderProps: SidebarRootProviderProps;
	ContentProps: SidebarContentProps;
	FooterProps: SidebarFooterProps;
	GroupProps: SidebarGroupProps;
	HeaderProps: SidebarHeaderProps;
	ItemProps: SidebarItemProps;
	ContextProps: SidebarContextProps;
	TriggerProps: SidebarTriggerProps;
};

export { useSidebar, useSidebarContext } from "./client";
export {
	SidebarContent,
	SidebarContext,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarItem,
	SidebarRoot,
	SidebarRootProvider,
	SidebarTrigger,
};
