import { type Assign, ark, type HTMLArkProps } from "@ark-ui/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { sortableRecipe } from "@moto-ui/styled-system/recipes";
import { forwardRef } from "react";
import { mergeRefs } from "../../utils/merge-ref";

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

export const SortableItem = withContext(ark.li, "item", {
	dataAttr: true,
	defaultProps: {
		role: "listitem",
		"data-part": "item",
		"data-scope": "sortable",
	},
});
SortableItem.displayName = "SortableItem";

type SortableItemHandleProps = Assign<
	HTMLArkProps<"div">,
	{
		id: number;
		index: number;
	}
>;
export const SortableItemHandleBase = forwardRef<
	HTMLDivElement,
	SortableItemHandleProps
>((props, ref) => {
	const { id, index, ...rest } = props;
	const { ref: sortableRef } = useSortable({ id, index });

	return (
		<ark.div
			ref={mergeRefs(sortableRef, ref)}
			{...rest}
		/>
	);
});
SortableItemHandleBase.displayName = "SortableItemHandleBase";

export const SortableItemHandle = withContext(
	SortableItemHandleBase,
	"handle",
	{
		dataAttr: true,
		defaultProps: {
			"data-part": "handle",
			"data-scope": "sortable",
		},
	},
);
SortableItemHandle.displayName = "SortableItemHandle";
