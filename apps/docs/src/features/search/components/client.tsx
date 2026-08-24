import { useHotkeys } from "@tanstack/react-hotkeys";
import { useDocsSearch } from "fumadocs-core/search/client";
import { createContext, use, useMemo, useState } from "react";

export function useSearch() {
	const [open, setOpen] = useState(false);
	const { search, setSearch, query } = useDocsSearch({
		delayMs: 200,
		allowEmpty: false,
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

	return useMemo(
		() => ({
			open,
			query,
			search,
			setOpen,
			setSearch,
		}),
		[open, search, query],
	);
}

export type UseSearchReturn = ReturnType<typeof useSearch>;

export const SearchContext = createContext<UseSearchReturn | null>(null);

export function useSearchContext() {
	const context = use(SearchContext);
	if (!context) {
		throw new Error("useSearchContext must be used within a SearchProvider");
	}
	return context;
}
