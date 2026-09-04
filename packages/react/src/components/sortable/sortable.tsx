import { type Assign, ark, type HTMLArkProps } from "@ark-ui/react";
import { forwardRef, type ReactElement, type RefAttributes } from "react";
import {
	createStyleContext,
	type HTMLStyledProps,
} from "../../styled-system/jsx";
import { sortableRecipe } from "../../styled-system/recipes";
import { mergeRefs } from "../../utils/merge-ref";
import {
	SortableItemProvider,
	SortableRootProvider as SortableRootProviderBase,
	type UseSortableItemProps,
	type UseSortableProps,
	useSortable,
	useSortableItem,
	useSortableItemContext,
} from "./client";

const { withProvider, withRootProvider, withContext } =
	createStyleContext(sortableRecipe);

export const SortableRootProvider = withRootProvider(SortableRootProviderBase);
SortableRootProvider.displayName = "SortableRootProvider";

export type SortableRootBaseProps<T> = Assign<
	Omit<HTMLArkProps<"ul">, keyof UseSortableProps<T>>,
	UseSortableProps<T>
>;
type SortableRootBaseComponent = {
	<T>(
		props: SortableRootBaseProps<T> & RefAttributes<HTMLUListElement>,
	): ReactElement;
	displayName?: string;
};
export const SortableRootBase = forwardRef<
	HTMLUListElement,
	SortableRootBaseProps<any>
>((props, ref) => {
	const { value, defaultValue, onValueChange, ...restProps } = props;

	const ctx = useSortable({
		value,
		defaultValue,
		onValueChange,
	});

	return (
		<SortableRootProviderBase value={ctx}>
			<ark.ul
				ref={ref}
				{...restProps}
			/>
		</SortableRootProviderBase>
	);
}) as SortableRootBaseComponent;
SortableRootBase.displayName = "SortableRootBase";

export type SortableRootProps<T> = Assign<
	SortableRootBaseProps<T>,
	Omit<HTMLStyledProps<"ul">, keyof UseSortableProps<T>>
>;
type SortableRootComponent = {
	<T>(props: SortableRootProps<T>): ReactElement;
	displayName?: string;
};
export const SortableRoot = withProvider(SortableRootBase, "root", {
	dataAttr: true,
	defaultProps: {
		role: "list",
		"data-part": "root",
		"data-scope": "sortable",
	},
}) as SortableRootComponent;
SortableRoot.displayName = "SortableRoot";

type SortableItemBaseProps = Omit<
	HTMLArkProps<"li">,
	keyof UseSortableItemProps
> &
	UseSortableItemProps;
export const SortableItemBase = forwardRef<
	HTMLLIElement,
	SortableItemBaseProps
>((props, ref) => {
	const { id, index, ...restProps } = props;

	const value = useSortableItem({ id, index });

	return (
		<SortableItemProvider value={value}>
			<ark.li
				id={String(id)}
				ref={mergeRefs(value.ref, ref)}
				data-dropping={value.isDropping ? "" : undefined}
				data-dragging={value.isDragging ? "" : undefined}
				data-state={
					value.isDragging ? "dragging" : value.isDropping ? "dropping" : "idle"
				}
				style={{ touchAction: "none", ...restProps.style }}
				{...restProps}
			/>
		</SortableItemProvider>
	);
});

export const SortableItem = withContext(SortableItemBase, "item", {
	dataAttr: true,
	defaultProps: {
		role: "listitem",
		"data-part": "item",
		"data-scope": "sortable",
	},
});
SortableItem.displayName = "SortableItem";

type SortableItemHandleBaseProps = HTMLArkProps<"div">;
export const SortableItemHandleBase = forwardRef<
	HTMLDivElement,
	SortableItemHandleBaseProps
>((props, ref) => {
	const { handleRef, isDropping, isDragging } = useSortableItemContext();

	return (
		<ark.div
			ref={mergeRefs(handleRef, ref)}
			data-dropping={isDropping ? "" : undefined}
			data-dragging={isDragging ? "" : undefined}
			data-state={isDragging ? "dragging" : isDropping ? "dropping" : "idle"}
			{...props}
		/>
	);
});
SortableItemHandleBase.displayName = "SortableItemHandleBase";

export const SortableItemHandle = withContext(
	SortableItemHandleBase,
	"itemHandle",
	{
		dataAttr: true,
		defaultProps: {
			"data-part": "handle",
			"data-scope": "sortable",
		},
	},
);
SortableItemHandle.displayName = "SortableItemHandle";
