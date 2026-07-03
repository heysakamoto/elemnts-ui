import type { ComponentProps } from "react";

import {
	BreadcrumbCurrentLink,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbRoot,
	BreadcrumbSeparator,
} from "./breadcrumb";

export type BreadcrumbEllipsisProps = ComponentProps<typeof BreadcrumbEllipsis>;
export type BreadcrumbItemProps = ComponentProps<typeof BreadcrumbItem>;
export type BreadcrumbLinkProps = ComponentProps<typeof BreadcrumbLink>;
export type BreadcrumbListProps = ComponentProps<typeof BreadcrumbList>;
export type BreadcrumbRootProps = ComponentProps<typeof BreadcrumbRoot>;
export type BreadcrumbSeparatorProps = ComponentProps<
	typeof BreadcrumbSeparator
>;
export type BreadcrumbCurrentLinkProps = ComponentProps<
	typeof BreadcrumbCurrentLink
>;

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
	Item: BreadcrumbItem,
	Link: BreadcrumbLink,
	List: BreadcrumbList,
	Root: BreadcrumbRoot,
	Separator: BreadcrumbSeparator,
	Ellipsis: BreadcrumbEllipsis,
	CurrentLink: BreadcrumbCurrentLink,
});

export type Breadcrumb = {
	Props: BreadcrumbRootProps;
	RootProps: BreadcrumbRootProps;
	ItemProps: BreadcrumbItemProps;
	LinkProps: BreadcrumbLinkProps;
	ListProps: BreadcrumbListProps;
	SeparatorProps: BreadcrumbSeparatorProps;
	EllipsisProps: BreadcrumbEllipsisProps;
	CurrentLinkProps: BreadcrumbCurrentLinkProps;
};

export {
	BreadcrumbCurrentLink,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbRoot,
	BreadcrumbSeparator,
};
