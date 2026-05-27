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

export const SortableItemTitle = withContext(ark.h6, "title", {
	dataAttr: true,
	defaultProps: {
		"data-part": "title",
		"data-scope": "sortable",
	},
});
SortableItemTitle.displayName = "SortableItemTitle";

export const SortableItemDescription = withContext(ark.p, "description", {
	dataAttr: true,
	defaultProps: {
		"data-part": "description",
		"data-scope": "sortable",
	},
});
SortableItemDescription.displayName = "SortableItemDescription";

export const SortableItemIndicator = withContext(ark.span, "indicator", {
	dataAttr: true,
	defaultProps: {
		"data-part": "indicator",
		"data-scope": "sortable",
	},
});
SortableItemIndicator.displayName = "SortableItemIndicator";

export const SortableItemAddon = withContext(ark.p, "addon", {
	dataAttr: true,
	defaultProps: {
		"data-part": "addon",
		"data-scope": "sortable",
	},
});
SortableItemAddon.displayName = "SortableItemAddon";

export const SortableItemContent = withContext(ark.div, "content", {
	dataAttr: true,
	defaultProps: {
		"data-part": "content",
		"data-scope": "sortable",
	},
});
SortableItemContent.displayName = "SortableItemContent";
