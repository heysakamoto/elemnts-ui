import { type Assign, ark, type HTMLArkProps } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { virtualListRecipe } from "@moto-ui/styled-system/recipes";
import type { VirtualItem } from "@tanstack/react-virtual";
import { Fragment, forwardRef, type ReactNode } from "react";
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

type VirtualListContentBaseProps = Assign<
	HTMLArkProps<"div">,
	{
		children: (props: {
			item: VirtualItem;
			measureElement: (node: Element | null | undefined) => void;
		}) => ReactNode;
	}
>;
export const VirtualListContentBase = forwardRef<
	HTMLDivElement,
	VirtualListContentBaseProps
>((props, ref) => {
	const { style, children, ...restProps } = props;
	const { virtualizer, items } = useVirtualListContext();

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
		>
			{items.map((item) => (
				<Fragment key={item.key}>
					{children({ item, measureElement: virtualizer.measureElement })}
				</Fragment>
			))}
		</ark.div>
	);
});

export const VirtualListContent = withContext(
	VirtualListContentBase,
	"content",
	{
		dataAttr: true,
		defaultProps: {
			"data-part": "container",
			"data-scope": "virtual-list",
		},
	},
);
VirtualListContent.displayName = "VirtualListContent";

type VirtualListItemBaseProps = Assign<
	HTMLArkProps<"div">,
	{
		item: VirtualItem;
	}
>;

export const VirtualListItemBase = forwardRef<
	HTMLDivElement,
	VirtualListItemBaseProps
>((props: VirtualListItemBaseProps, ref) => {
	const { item, style, ...restProps } = props;

	return (
		<ark.div
			ref={ref}
			data-index={item.index}
			style={{
				top: 0,
				left: 0,
				width: "100%",
				position: "absolute",
				height: `${item.size}px`,
				transform: `translateY(${item.start}px)`,
				...style,
			}}
			{...restProps}
		/>
	);
});

export const VirtualListItem = withContext(VirtualListItemBase, "item", {
	dataAttr: true,
	defaultProps: {
		"data-part": "item",
		"data-scope": "virtual-list",
	},
});
VirtualListItem.displayName = "VirtualListItem";
