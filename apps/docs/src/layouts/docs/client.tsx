import type { Root } from "fumadocs-core/page-tree";
import type { TOCItemType } from "fumadocs-core/toc";
import { createContext, use, useContext, useState } from "react";

export type UseDocsLayoutReturnType = ReturnType<typeof useDocsLayout>;
export const DocsLayoutContext = createContext<UseDocsLayoutReturnType | null>(
	null,
);

export type UseDocsLayoutProps = {
	pageTree: Root;
};
export function useDocsLayout(props: UseDocsLayoutProps) {
	const { pageTree } = props;
	return {
		pageTree,
	};
}

export function useDocsLayoutContext() {
	const ctx = useContext(DocsLayoutContext);
	if (!ctx) {
		throw new Error(
			"useDocsLayoutContext must be used within a DocsLayoutProvider",
		);
	}
	return ctx;
}

export type DocsLayoutPageContextValue = {
	toc: TOCItemType[];
};

export const DocsLayoutPageContext =
	createContext<DocsLayoutPageContextValue | null>(null);

export function useDocsLayoutPageContext() {
	const ctx = useContext(DocsLayoutPageContext);
	if (!ctx) {
		throw new Error(
			"useDocsLayoutPageContext must be used within a DocsLayoutPageProvider",
		);
	}
	return ctx;
}

export type UseDocsLayoutMobileMenuProps = {
	defaultOpen?: boolean;
};
export function useDocsLayoutMobileMenu(props?: UseDocsLayoutMobileMenuProps) {
	const { defaultOpen = false } = props ?? {};
	const [open, setOpen] = useState(defaultOpen);

	return { open, setOpen };
}

type UseDocsLayoutMobileMenuReturn = ReturnType<typeof useDocsLayoutMobileMenu>;

export const DocsLayoutMobileMenuContext =
	createContext<UseDocsLayoutMobileMenuReturn | null>(null);

export function useDocsLayoutMobileMenuContext() {
	const ctx = use(DocsLayoutMobileMenuContext);
	if (!ctx) {
		throw new Error(
			"useDocsLayoutMobileMenuContext must be used within a DocsLayoutMobileMenuProvider",
		);
	}
	return ctx;
}

type UseDocsLayoutCommandMenuProps = {
	defaultOpen?: boolean;
};
export function useDocsLayoutCommandMenu(
	props?: UseDocsLayoutCommandMenuProps,
) {
	const { defaultOpen = false } = props ?? {};
	const [open, setOpen] = useState(defaultOpen);

	return { open, setOpen };
}

type UseDocsLayoutCommandMenuReturn = ReturnType<
	typeof useDocsLayoutCommandMenu
>;

export const DocsLayoutCommandMenuContext =
	createContext<UseDocsLayoutCommandMenuReturn | null>(null);

export function useDocsLayoutCommandMenuContext() {
	const ctx = useContext(DocsLayoutCommandMenuContext);
	if (!ctx) {
		throw new Error(
			"useDocsLayoutCommandMenuContext must be used within a DocsLayoutCommandMenuProvider",
		);
	}
	return ctx;
}
