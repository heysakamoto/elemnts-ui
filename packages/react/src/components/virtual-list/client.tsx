import { useVirtualizer } from "@tanstack/react-virtual";
import { createContext, useContext, useState } from "react";

export type VirtualListContextValue = ReturnType<typeof useVirtualList>;
export const VirtualListContext = createContext<VirtualListContextValue | null>(
	null,
);

export type UseVirtualListProps = {
	count: number;
	overscan?: number;
	dynamicHeight?: boolean;
	estimateSize?: (index: number) => number;
};
export function useVirtualList(props: UseVirtualListProps) {
	const {
		count,
		overscan,
		dynamicHeight = true,
		estimateSize = () => 50,
	} = props;
	const [scrollElement, setScrollElement] = useState<HTMLDivElement | null>(
		null,
	);

	const virtualizer = useVirtualizer({
		count,
		overscan,
		estimateSize,
		getScrollElement: () => scrollElement,
	});

	const items = virtualizer.getVirtualItems();

	return {
		items,
		virtualizer,
		dynamicHeight,
		parentRef: setScrollElement,
	};
}

export function useVirtualListContext() {
	const context = useContext(VirtualListContext);
	if (!context) {
		throw new Error("Virtual components must be used within a <Virtual.Root>");
	}
	return context;
}
