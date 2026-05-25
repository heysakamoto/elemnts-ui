import { type Assign, ark, type HTMLArkProps } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { virtualListRecipe } from "@moto-ui/styled-system/recipes";
import type { ReactNode } from "react";
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
	const { count, overscan, dynamicHeight, estimateSize, ...restProps } = props;
	const value = useVirtualList({
		count,
		overscan,
		estimateSize,
		dynamicHeight,
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
	children: (index: number) => ReactNode;
};

export const VirtualListItems = ({ children }: VirtualListItemsProps) => {
	const { items, dynamicHeight, virtualizer } = useVirtualListContext();

	return (
		<>
			{items.map((item) => (
				<div
					key={item.key}
					data-index={item.index}
					ref={dynamicHeight ? virtualizer.measureElement : null}
					style={{
						top: 0,
						left: 0,
						width: "100%",
						position: "absolute",
						transform: `translateY(${item.start}px)`,
						height: dynamicHeight ? undefined : `${item.size}px`,
					}}
				>
					{children(item.index)}
				</div>
			))}
		</>
	);
};
