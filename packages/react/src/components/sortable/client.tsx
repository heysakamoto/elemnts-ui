import { useSortable } from "@dnd-kit/react/sortable";
import { createContext, type PropsWithChildren, useContext } from "react";

type SortableItemContextValue = ReturnType<typeof useSortableItem>;

const SortableItemContext = createContext<SortableItemContextValue | null>(
	null,
);

export function useSortableItemContext() {
	const context = useContext(SortableItemContext);
	if (!context) {
		throw new Error(
			"useSortableItemContext must be used within a SortableItemProvider",
		);
	}
	return context;
}

export type UseSortableItemProps = {
	id: string;
	index: number;
};
export function useSortableItem(props: UseSortableItemProps) {
	const { id, index } = props;
	const { ref, handleRef, isDragging, isDropping } = useSortable({ id, index });

	return {
		ref,
		handleRef,
		isDragging,
		isDropping,
	};
}

type SortableItemProviderProps = PropsWithChildren<{
	value: SortableItemContextValue;
}>;
export function SortableItemProvider(props: SortableItemProviderProps) {
	const { children, value } = props;

	return (
		<SortableItemContext.Provider value={value}>
			{children}
		</SortableItemContext.Provider>
	);
}
