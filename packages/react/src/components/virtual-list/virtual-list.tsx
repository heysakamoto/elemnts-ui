import { type Assign, ark, type HTMLArkProps } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { virtualListRecipe } from "@moto-ui/styled-system/recipes";
import type { VirtualItem } from "@tanstack/react-virtual";
import type { ReactNode, Ref } from "react";
import { forwardRef } from "react";
import { mergeRefs } from "../../utils/merge-ref";
import {
	type UseVirtualListProps,
	useVirtualList,
	useVirtualListContext,
	VirtualListContext,
	type VirtualListContextValue,
} from "./client";

const { withProvider, withContext } = createStyleContext(virtualListRecipe);

type VirtualListRootProviderBaseProps = Assign<
	HTMLArkProps<"div">,
	{ value: VirtualListContextValue }
>;

export const VirtualListRootProviderBase = forwardRef<
	HTMLDivElement,
	VirtualListRootProviderBaseProps
>((props, ref) => {
	const { value, ...restProps } = props;

	return (
		<VirtualListContext.Provider value={value}>
			<ark.div
				ref={ref}
				{...restProps}
			/>
		</VirtualListContext.Provider>
	);
});

export const VirtualListRootProvider = withProvider(
	VirtualListRootProviderBase,
	"root",
);
VirtualListRootProvider.displayName = "VirtualListRootProvider";

type VirtualListRootBaseProps = Assign<
	HTMLArkProps<"div">,
	UseVirtualListProps
>;
export const VirtualListRootBase = forwardRef<
	HTMLDivElement,
	VirtualListRootBaseProps
>((props, ref) => {
	const { count, overscan, estimateSize, ...restProps } = props;
	const value = useVirtualList({
		count,
		overscan,
		estimateSize,
	});

	return (
		<VirtualListContext.Provider value={value}>
			<ark.div
				ref={ref}
				{...restProps}
			/>
		</VirtualListContext.Provider>
	);
});

export const VirtualListRoot = withProvider(VirtualListRootBase, "root", {
	dataAttr: true,
	defaultProps: {
		"data-part": "root",
		"data-scope": "virtual-list",
	},
});
VirtualListRoot.displayName = "VirtualListRoot";

type VirtualListViewportBaseProps = HTMLArkProps<"div">;
export const VirtualListViewportBase = forwardRef<
	HTMLDivElement,
	VirtualListViewportBaseProps
>((props, ref) => {
	const { style, ...restProps } = props;
	const { parentRef } = useVirtualListContext();

	return (
		<ark.div
			style={{ position: "relative", overflow: "auto", ...style }}
			ref={mergeRefs(parentRef, ref)}
			{...restProps}
		/>
	);
});

export const VirtualListViewport = withContext(
	VirtualListViewportBase,
	"viewport",
	{
		dataAttr: true,
		defaultProps: {
			"data-part": "viewport",
			"data-scope": "virtual-list",
		},
	},
);
VirtualListViewport.displayName = "VirtualListViewport";

type VirtualListContainerBaseProps = HTMLArkProps<"div">;
export const VirtualListContainerBase = forwardRef<
	HTMLDivElement,
	VirtualListContainerBaseProps
>((props, ref) => {
	const { style, ...restProps } = props;
	const { virtualizer } = useVirtualListContext();

	return (
		<ark.div
			ref={ref}
			style={{
				width: "100%",
				position: "relative",
				height: `${virtualizer.getTotalSize()}px`,
				...style,
			}}
			{...restProps}
		/>
	);
});

export const VirtualListContainer = withContext(
	VirtualListContainerBase,
	"container",
	{
		dataAttr: true,
		defaultProps: {
			"data-part": "container",
			"data-scope": "virtual-list",
		},
	},
);
VirtualListContainer.displayName = "VirtualListContainer";

type VirtualListItemsProps = {
	children: (props: {
		item: VirtualItem;
		measureElement: Ref<Element>;
	}) => ReactNode;
};

export const VirtualListItems = ({ children }: VirtualListItemsProps) => {
	const { items, virtualizer } = useVirtualListContext();

	return (
		<>
			{items.map((item) => (
				<>
					{children({ item: item, measureElement: virtualizer.measureElement })}
				</>
			))}
		</>
	);
};
