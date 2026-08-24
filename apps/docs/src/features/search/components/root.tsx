import type { PropsWithChildren } from "react";

import { useSearch } from "./client";
import { SearchRootProvider } from "./root-provider";

export function SearchRoot({ children }: PropsWithChildren) {
	const value = useSearch();
	return <SearchRootProvider value={value}>{children}</SearchRootProvider>;
}
