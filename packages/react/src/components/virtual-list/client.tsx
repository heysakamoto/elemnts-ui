import { useVirtualizer, type Virtualizer } from "@tanstack/react-virtual";
import { createContext, useContext, useState } from "react";

interface VirtualizerContextType {
	virtualizer: Virtualizer<HTMLDivElement, Element>;
	parentRef: (node: HTMLDivElement | null) => void;
}

export const VirtualListContext = createContext<VirtualizerContextType | null>(
	null,
);

export type UseVirtualListProps = {
	count: number;
	overscan?: number;
	estimateSize?: (index: number) => number;
};
export function useVirtualList(props: UseVirtualListProps) {
	const { count, overscan = 5, estimateSize = () => 50 } = props;

	const [scrollElement, setScrollElement] = useState<HTMLDivElement | null>(
		null,
	);

	const virtualizer = useVirtualizer({
		count,
		getScrollElement: () => scrollElement,
		estimateSize,
		overscan,
	});

	return {
		virtualizer,
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
