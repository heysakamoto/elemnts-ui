import type { Root } from "fumadocs-core/page-tree";
import type { TOCItemType } from "fumadocs-core/toc";
import { createContext, type PropsWithChildren, useContext } from "react";

export type DocsLayoutContextValue = {
	pageTree: Root;
};

export const DocsLayoutContext = createContext<DocsLayoutContextValue | null>(
	null,
);

export function useDocsLayoutContext() {
	const ctx = useContext(DocsLayoutContext);

	if (!ctx) {
		throw new Error(
			"useDocsLayoutContext must be used within a DocsLayoutProvider",
		);
	}

	return ctx;
}

export type DocsLayoutProviderProps = PropsWithChildren<{
	value: DocsLayoutContextValue;
}>;
export function DocsLayoutProvider(props: DocsLayoutProviderProps) {
	const { children, value } = props;

	return (
		<DocsLayoutContext.Provider value={value}>
			{children}
		</DocsLayoutContext.Provider>
	);
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

export type DocsLayoutPageProviderProps = PropsWithChildren<{
	value: DocsLayoutPageContextValue;
}>;
export function DocsLayoutPageProvider(props: DocsLayoutPageProviderProps) {
	const { children, value } = props;

	return (
		<DocsLayoutPageContext.Provider value={value}>
			{children}
		</DocsLayoutPageContext.Provider>
	);
}

const InDialogProvider = createContext(false);

export const InDialogContextProvider = InDialogProvider.Provider;

export const useInDialogContext = () => useContext(InDialogProvider);
