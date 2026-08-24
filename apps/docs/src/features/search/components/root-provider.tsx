import type { PropsWithChildren } from "react";

import { SearchContext, type UseSearchReturn } from "./client";

export function SearchRootProvider({
	children,
	value,
}: PropsWithChildren<{ value: UseSearchReturn }>) {
	return <SearchContext value={value}>{children}</SearchContext>;
}
