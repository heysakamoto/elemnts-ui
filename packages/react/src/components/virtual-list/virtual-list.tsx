import { type Assign, ark, type HTMLArkProps } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { virtualListRecipe } from "@moto-ui/styled-system/recipes";
import type { ReactNode } from "react";
import { forwardRef } from "react";
import {
	type UseVirtualListProps,
	useVirtualList,
	useVirtualListContext,
	VirtualListContext,
} from "./client";
import { mergeRefs } from "../../utils/merge-ref";

const { withRootProvider, withProvider, withContext } =
	createStyleContext(virtualListRecipe);

type VirtualListRootProviderBaseProps = UseVirtualListProps & {
	children: ReactNode;
};

export const VirtualListRootProviderBase = (
	props: VirtualListRootProviderBaseProps,
) => {
	const { count, overscan, estimateSize, children } = props;
	const value = useVirtualList({ count, overscan, estimateSize });

	return (
		<VirtualListContext.Provider value={value}>
			{children}
		</VirtualListContext.Provider>
	);
};

export const VirtualListRootProvider = withRootProvider(
	VirtualListRootProviderBase,
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
	const value = useVirtualList({ count, overscan, estimateSize });

	return (
		<VirtualListContext.Provider value={value}>
			<ark.div
				ref={ref}
				{...restProps}
			/>
		</VirtualListContext.Provider>
	);
});

export const VirtualListRoot = withProvider(VirtualListRootBase, "root");
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
);
VirtualListContainer.displayName = "VirtualListContainer";

type VirtualListItemsProps = {
	children: (index: number) => ReactNode;
};

export const VirtualListItems = ({ children }: VirtualListItemsProps) => {
	const { virtualizer } = useVirtualListContext();
	const items = virtualizer.getVirtualItems();

	return items.map((item) => (
		<div
			key={item.key}
			data-index={item.index}
			ref={virtualizer.measureElement}
			style={{
				top: 0,
				left: 0,
				width: "100%",
				position: "absolute",
				height: `${item.size}px`,
				transform: `translateY(${item.start}px)`,
			}}
		>
			{children(item.index)}
		</div>
	));
};
