import { useVirtualizer, type Virtualizer } from "@tanstack/react-virtual";
import { createContext, useContext, useRef } from "react";

interface VirtualizerContextType {
	virtualizer: Virtualizer<HTMLDivElement, Element>;
	parentRef: React.RefObject<HTMLDivElement>;
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

	const parentRef = useRef<HTMLDivElement>(null!);

	const virtualizer = useVirtualizer({
		count,
		getScrollElement: () => parentRef.current,
		estimateSize,
		overscan,
	});

	return {
		virtualizer,
		parentRef,
	};
}

export function useVirtualListContext() {
	const context = useContext(VirtualListContext);
	if (!context) {
		throw new Error("Virtual components must be used within a <Virtual.Root>");
	}
	return context;
}
