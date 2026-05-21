import type { Assign } from "@ark-ui/react";
import { useVirtualizer } from "@tanstack/react-virtual";
import React from "react";

type KeyExtractor<T> = (item: T, index: number) => React.Key;

export type UseVirtualProps<
	T extends unknown[],
	R extends Element = Element,
> = {
	items: T;
	overscan?: number;
	parentRef?: React.RefObject<R>;
	keyExtractor?: KeyExtractor<T[number]>;
	estimateSize: (index: number) => number;
};

export type RangeState = {
	offset: number;
	endIndex: number;
	isAtTop: boolean;
	startIndex: number;
	isAtBottom: boolean;
	direction: "forward" | "backward" | null;
};

export type UseVirtualReturn<
	T extends unknown[],
	R extends Element = Element,
> = {
	items: T;
	range: RangeState;
	parentRef: React.RefObject<R>;
	keyExtractor?: KeyExtractor<T[number]>;
	virtualizer: ReturnType<typeof useVirtualizer<R, Element>>;
	setRange: React.Dispatch<React.SetStateAction<RangeState>>;
};

const ContextEl = React.createContext<UseVirtualReturn<any, Element> | null>(
	null,
);

export const useVirtualContext = <
	T extends unknown[],
	R extends Element = Element,
>(): UseVirtualReturn<T, R> => {
	const context = React.useContext(ContextEl);
	if (!context) {
		throw new Error("VirtualFor: missing provider");
	}
	return context as any;
};

export const useVirtualScroll = <T extends unknown[]>() => {
	const ctx = useVirtualContext<T>();
	const v = ctx.virtualizer;

	return {
		scrollToIndex: (i: number, align: "start" | "center" | "end" = "start") =>
			v.scrollToIndex(i, { align }),

		scrollToItem: (
			predicate: (item: T[number], index: number) => boolean,
			align: "start" | "center" | "end" = "start",
		) => {
			const idx = ctx.items.findIndex(predicate);
			if (idx !== -1) v.scrollToIndex(idx, { align });
		},

		scrollToTop: () => v.scrollToOffset(0),

		scrollToBottom: () =>
			v.scrollToIndex(ctx.items.length - 1, { align: "end" }),

		scrollToOffset: (offset: number) => v.scrollToOffset(offset),
	};
};

export function useVirtualRangeObserver<
	T extends unknown[],
	R extends Element = Element,
>(ctx: UseVirtualReturn<T, R>) {
	const { virtualizer, setRange, items } = ctx;
	const lastOffset = React.useRef(0);

	const vItems = virtualizer.getVirtualItems() ?? [];
	const scrollOffset = virtualizer.scrollOffset ?? 0;

	React.useEffect(() => {
		if (vItems.length === 0) return;

		let direction: RangeState["direction"] = null;

		if (scrollOffset > lastOffset.current) direction = "forward";
		else if (scrollOffset < lastOffset.current) direction = "backward";

		lastOffset.current = scrollOffset;

		const first = vItems[0];
		const last = vItems[vItems.length - 1];

		if (!first || !last) return;

		setRange((prev) => ({
			...prev,
			direction,
			offset: scrollOffset,
			endIndex: last.index,
			startIndex: first.index,
			isAtTop: scrollOffset <= 0,
			isAtBottom: last.index === items.length - 1,
		}));
	}, [vItems, scrollOffset, setRange, items.length]);
}

export const useVirtualRange = () => useVirtualContext<any>().range;
export const useVirtualScrollDirection = () =>
	useVirtualContext<any>().range.direction;

export const use = <T extends unknown[], R extends Element = Element>(
	props: UseVirtualProps<T, R>,
): UseVirtualReturn<T, R> => {
	const {
		items = [],
		overscan = 0,
		estimateSize,
		keyExtractor,
		parentRef: defaultParentRef,
	} = props;

	const newRef = React.useRef<R>(null!);
	const parentRef = defaultParentRef || newRef;

	const virtualizer = useVirtualizer({
		overscan,
		count: items.length,
		estimateSize,
		getScrollElement: () => parentRef.current,
		measureElement: (el) => el.getBoundingClientRect().height,
	});

	const [range, setRange] = React.useState<RangeState>({
		offset: 0,
		endIndex: 0,
		startIndex: 0,
		isAtTop: true,
		isAtBottom: false,
		direction: null,
	});

	const ctx = {
		range,
		setRange,
		parentRef,
		virtualizer,
		keyExtractor,
		items: items as T,
	};

	useVirtualRangeObserver(ctx);

	return ctx;
};

export type ProviderProps<T extends unknown[], R extends Element = Element> = {
	children: React.ReactNode;
	value: UseVirtualReturn<T, R>;
};
export const Provider = <T extends unknown[], R extends Element = Element>(
	props: ProviderProps<T, R>,
) => {
	return (
		<ContextEl.Provider value={props.value as any}>
			{props.children}
		</ContextEl.Provider>
	);
};

export type RootProps<
	T extends unknown[],
	R extends Element = Element,
> = UseVirtualProps<T, R> & {
	children: React.ReactNode;
};
export const Root = <T extends unknown[], R extends Element = Element>(
	props: RootProps<T, R>,
) => {
	const { children, ...rest } = props;

	const api = use({ ...rest });

	return <Provider<T, R> value={api}>{children}</Provider>;
};

export const Context = (props: {
	children: (ctx: UseVirtualReturn<any>) => React.ReactNode;
}) => {
	const ctx = useVirtualContext<any>();
	const { children } = props;

	if (typeof props.children !== "function") {
		throw new Error("VirtualFor.Context: children must be function");
	}

	return <>{children(ctx)}</>;
};

export type ContentProps = React.HTMLAttributes<HTMLDivElement>;
export const Content = React.forwardRef<never, ContentProps>((props, _) => {
	const { parentRef } = useVirtualContext<any, HTMLDivElement>();
	const { style = {}, ...rest } = props;

	return (
		<div
			{...rest}
			aria-live="polite"
			data-part={"content"}
			ref={parentRef}
			style={{
				...style,
				overflow: "auto",
			}}
		/>
	);
});

export type RowProps = React.HTMLAttributes<HTMLUListElement>;
export const Row = React.forwardRef<HTMLUListElement, RowProps>(
	(props, ref) => {
		const { style = {}, ...rest } = props;
		const { virtualizer } = useVirtualContext<any, HTMLUListElement>();

		return (
			<ul
				{...rest}
				ref={ref}
				data-part="row"
				aria-busy={virtualizer.isScrolling}
				style={{
					...style,
					position: "relative",
					height: `${virtualizer.getTotalSize()}px`,
				}}
			/>
		);
	},
);

export type RowListBaseProps = {
	fallback?: React.ReactNode;
	children: (item: any, index: number) => React.ReactNode;
};
export type RowListProps = Assign<
	React.HTMLAttributes<HTMLLIElement>,
	RowListBaseProps
>;
export const RowList = React.forwardRef<HTMLLIElement, RowListProps>(
	(props, ref) => {
		const { children, fallback, style = {}, ...rest } = props;
		const { virtualizer, items, range, keyExtractor } =
			useVirtualContext<any>();

		const vItems = virtualizer.getVirtualItems();

		return (
			<>
				{vItems.map((vItem) => {
					const item = items[vItem.index];
					const key = keyExtractor?.(item, vItem.index) ?? vItem.key;

					const isVisible =
						vItem.index >= range.startIndex && vItem.index <= range.endIndex;

					const isFirstVisible = vItem.index === range.startIndex;

					return (
						<li
							ref={ref}
							key={key}
							aria-hidden={!isVisible}
							aria-setsize={items.length}
							aria-posinset={vItem.index + 1}
							tabIndex={isFirstVisible ? 0 : -1}
							style={{
								...style,
								top: 0,
								left: 0,
								width: "100%",
								position: "absolute",
								height: `${vItem.size}px`,
								transform: `translateY(${vItem.start}px)`,
							}}
							{...rest}
						>
							{children(item, vItem.index)}
						</li>
					);
				})}
			</>
		);
	},
);

export type StickyBaseProps = {
	index?: number;
	mode?: "fixed" | "active";
	position?: "top" | "bottom";
	strategy?: "start" | "end" | "center" | "index";
	children: (item: any, index: number) => React.ReactNode;
};
export type StickyProps = Assign<
	React.HTMLAttributes<HTMLDivElement>,
	StickyBaseProps
>;
export const Sticky = React.forwardRef<HTMLDivElement, StickyProps>(
	(props, ref) => {
		const {
			children,
			index = 0,
			mode = "fixed",
			position = "top",
			strategy = "index",
			style = {},
			...rest
		} = props;

		const { items, range } = useVirtualContext<any>();

		const calcEffectiveIndex = () => {
			let idx = index;

			if (mode === "active") {
				switch (strategy) {
					case "start":
						idx = range.startIndex;
						break;
					case "end":
						idx = range.endIndex;
						break;
					case "center":
						idx = Math.floor((range.startIndex + range.endIndex) / 2);
						break;
				}
			}
			return idx;
		};

		const effectiveIndex = calcEffectiveIndex();
		const item = items[effectiveIndex];
		const isVisible =
			effectiveIndex >= range.startIndex && effectiveIndex <= range.endIndex;

		return (
			<div
				{...rest}
				ref={ref}
				role="status"
				aria-live="polite"
				aria-hidden={!isVisible}
				hidden={!isVisible ? true : undefined}
				style={{
					...style,
					zIndex: 30,
					position: "sticky",
					pointerEvents: "none",
					background: "inherit",
					transform: "translateZ(0)",
					top: position === "top" ? 0 : undefined,
					bottom: position === "bottom" ? 0 : undefined,
				}}
			>
				{children(item, effectiveIndex)}
			</div>
		);
	},
);
