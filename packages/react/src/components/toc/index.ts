import type { ComponentProps } from "react";

import {
	TocContent,
	TocContext,
	TocIndicator,
	TocItem,
	TocLink,
	TocList,
	TocNav,
	TocRoot,
	TocRootProvider,
	TocTitle,
} from "./toc";

export type TocTitleProps = ComponentProps<typeof TocTitle>;
export type TocContextProps = ComponentProps<typeof TocContext>;
export type TocContentProps = ComponentProps<typeof TocContent>;
export type TocIndicatorProps = ComponentProps<typeof TocIndicator>;
export type TocItemProps = ComponentProps<typeof TocItem>;
export type TocLinkProps = ComponentProps<typeof TocLink>;
export type TocListProps = ComponentProps<typeof TocList>;
export type TocNavProps = ComponentProps<typeof TocNav>;
export type TocRootProps = ComponentProps<typeof TocRoot>;
export type TocRootProviderProps = ComponentProps<typeof TocRootProvider>;

export const Toc = Object.assign(TocRoot, {
	Title: TocTitle,
	Context: TocContext,
	Content: TocContent,
	Indicator: TocIndicator,
	Item: TocItem,
	Link: TocLink,
	List: TocList,
	Nav: TocNav,
	Root: TocRoot,
	RootProvider: TocRootProvider,
});

export type Toc = {
	Props: TocRootProps;
	RootProps: TocRootProps;
	TitleProps: TocTitleProps;
	ContextProps: TocContextProps;
	ContentProps: TocContentProps;
	IndicatorProps: TocIndicatorProps;
	ItemProps: TocItemProps;
	LinkProps: TocLinkProps;
	ListProps: TocListProps;
	NavProps: TocNavProps;
	RootProviderProps: TocRootProviderProps;
};

export {
	type UseTocContext,
	type UseTocProps,
	type UseTocReturn,
	useToc,
	useTocContext,
} from "@ark-ui/react/toc";

export {
	TocContent,
	TocContext,
	TocIndicator,
	TocItem,
	TocLink,
	TocList,
	TocNav,
	TocRoot,
	TocRootProvider,
	TocTitle,
};
