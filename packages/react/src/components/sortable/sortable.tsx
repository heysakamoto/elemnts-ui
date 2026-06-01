import { type Assign, ark, type HTMLArkProps } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { sortableRecipe } from "@moto-ui/styled-system/recipes";
import { forwardRef } from "react";
import { mergeRefs } from "../../utils/merge-ref";
import {
	SortableItemProvider,
	type UseSortableItemProps,
	useSortableItem,
	useSortableItemContext,
} from "./client";

const { withProvider, withContext } = createStyleContext(sortableRecipe);

export const SortableRoot = withProvider(ark.ul, "root", {
	dataAttr: true,
	defaultProps: {
		role: "list",
		"data-part": "root",
		"data-scope": "sortable",
	},
});
SortableRoot.displayName = "SortableRoot";

type SortableItemBaseProps = Assign<HTMLArkProps<"li">, UseSortableItemProps>;
export const SortableItemBase = forwardRef<
	HTMLLIElement,
	SortableItemBaseProps
>((props, ref) => {
	const { id, index, ...restProps } = props;

	const value = useSortableItem({ id, index });

	return (
		<SortableItemProvider value={value}>
			<ark.li
				ref={mergeRefs(value.ref, ref)}
				data-dropping={value.isDropping ? "" : undefined}
				data-dragging={value.isDragging ? "" : undefined}
				data-state={
					value.isDragging ? "dragging" : value.isDropping ? "dropping" : "idle"
				}
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
