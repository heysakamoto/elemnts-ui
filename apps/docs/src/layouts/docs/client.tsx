import { useHotkeys } from "@tanstack/react-hotkeys";
import type { Root } from "fumadocs-core/page-tree";
import { useDocsSearch } from "fumadocs-core/search/client";
import type { TOCItemType } from "fumadocs-core/toc";
import {
	createContext,
	type PropsWithChildren,
	useContext,
	useState,
} from "react";

export type UseDocsLayoutReturnType = ReturnType<typeof useDocsLayout>;
export const DocsLayoutContext = createContext<UseDocsLayoutReturnType | null>(
	null,
);

type UseDocsLayoutProps = {
	pageTree: Root;
};
export function useDocsLayout(props: UseDocsLayoutProps) {
	const { pageTree } = props;
	const [open, setOpen] = useState(false);
	const { search, setSearch, query } = useDocsSearch({
		type: open ? "fetch" : "static",
	});

	useHotkeys([
		{
			hotkey: "/",
			callback: (event) => {
				event.preventDefault();
				setOpen(!open);
			},
		},
	]);

	return {
		open,
		query,
		search,
		setOpen,
		setSearch,
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

export type DocsLayoutProviderProps = PropsWithChildren<{
	value: UseDocsLayoutReturnType;
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

export const InDialogContext = createContext(false);

export const InDialogContextProvider = InDialogContext.Provider;

export const useInDialogContext = () => useContext(InDialogContext);
