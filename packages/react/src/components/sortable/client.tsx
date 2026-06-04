import type { Assign } from "@ark-ui/react";
import { DragDropProvider } from "@dnd-kit/react";
import {
	isSortable,
	useSortable as useSortableBase,
} from "@dnd-kit/react/sortable";
import {
	type ComponentProps,
	createContext,
	type PropsWithChildren,
	useCallback,
	useContext,
	useState,
} from "react";

type SortableItemContextValue = ReturnType<typeof useSortableItem>;

const SortableItemContext = createContext<SortableItemContextValue | null>(
	null,
);

export type UseSortableItemProps = {
	id: string | number;
	index: number;
};
export function useSortableItem({ id, index }: UseSortableItemProps) {
	const { ref, handleRef, isDragging, isDropping, isDragSource, isDropTarget } =
		useSortableBase({
			id,
			index,
		});

	return {
		ref,
		handleRef,
		isDragging,
		isDropping,
		isDragSource,
		isDropTarget,
	};
}

export type SortableItemProviderProps = PropsWithChildren<{
	value: SortableItemContextValue;
}>;

export function SortableItemProvider({
	children,
	value,
}: SortableItemProviderProps) {
	return (
		<SortableItemContext.Provider value={value}>
			{children}
		</SortableItemContext.Provider>
	);
}

export function useSortableItemContext() {
	const context = useContext(SortableItemContext);

	if (!context) {
		throw new Error(
			"Sortable.Item and Sortable.ItemHandle must be used within Sortable.Item",
		);
	}

	return context;
}

export type SortableContextValue = ReturnType<typeof useSortable>;

export type UseSortableProps<T> = {
	defaultValue?: T[];
	value?: T[];
	onValueChange?: (props: { value: T[] }) => void;
};

export function useSortable<T>({
	defaultValue = [],
	onValueChange,
	value: controlledValue,
}: UseSortableProps<T>) {
	const [uncontrolledValue, setUncontrolledValue] = useState<T[]>(defaultValue);

	const isControlled = controlledValue !== undefined;

	const value = isControlled ? controlledValue : uncontrolledValue;

	const setValue = useCallback(
		(value: T[]) => {
			if (!isControlled) {
				setUncontrolledValue(value);
			}
			onValueChange?.({ value });
		},
		[isControlled, onValueChange],
	);

	return {
		value,
		setValue,
	};
}

export function useSortableContext() {
	const context = useContext(SortableContext);

	if (!context) {
		throw new Error(
			"SortableRoot and Sortable.Item must be used within SortableRoot",
		);
	}

	return context;
}

export type SortableRootProviderProps = Assign<
	ComponentProps<typeof DragDropProvider>,
	{
		value: SortableContextValue;
	}
>;

const SortableContext = createContext<SortableContextValue | null>(null);

export function SortableRootProvider(props: SortableRootProviderProps) {
	const { value, onDragEnd, ...rest } = props;

	return (
		<SortableContext.Provider value={value}>
			<DragDropProvider
				onDragEnd={(event, manager) => {
					if (event.canceled || !event.operation) return;

					const { source } = event.operation;

					// Verify it's a sortable interaction
					if (!isSortable(source)) return;

					const { initialIndex, index } = source.sortable;

					// If it was dropped in the exact same spot, do nothing
					if (initialIndex === index) return;

					// Calculate the new array order and pass it to the callback
					const updatedItems = [...value.value];
					const [movedItem] = updatedItems.splice(initialIndex, 1);
					updatedItems.splice(index, 0, movedItem);

					value.setValue(updatedItems);
					onDragEnd?.(event, manager);
				}}
				{...rest}
			/>
		</SortableContext.Provider>
	);
}
