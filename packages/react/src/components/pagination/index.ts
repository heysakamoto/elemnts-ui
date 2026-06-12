import type { ComponentProps } from "react";
import {
	PaginationContext,
	PaginationEllipsis,
	PaginationFirstTrigger,
	PaginationItem,
	PaginationLastTrigger,
	PaginationNextTrigger,
	PaginationPrevTrigger,
	PaginationRoot,
	PaginationRootProvider,
} from "./pagination";

export type PaginationRootProviderProps = ComponentProps<
	typeof PaginationRootProvider
>;
export type PaginationRootProps = ComponentProps<typeof PaginationRoot>;
export type PaginationContextProps = ComponentProps<typeof PaginationContext>;
export type PaginationEllipsisProps = ComponentProps<typeof PaginationEllipsis>;
export type PaginationItemProps = ComponentProps<typeof PaginationItem>;
export type PaginationNextTriggerProps = ComponentProps<
	typeof PaginationNextTrigger
>;
export type PaginationPrevTriggerProps = ComponentProps<
	typeof PaginationPrevTrigger
>;
export type PaginationFirstTriggerProps = ComponentProps<
	typeof PaginationFirstTrigger
>;
export type PaginationLastTriggerProps = ComponentProps<
	typeof PaginationLastTrigger
>;

export const Pagination = Object.assign(PaginationRoot, {
	RootProvider: PaginationRootProvider,
	Root: PaginationRoot,
	Context: PaginationContext,
	Ellipsis: PaginationEllipsis,
	Item: PaginationItem,
	NextTrigger: PaginationNextTrigger,
	PrevTrigger: PaginationPrevTrigger,
	FirstTrigger: PaginationFirstTrigger,
	LastTrigger: PaginationLastTrigger,
});

export type Pagination = {
	RootProviderProps: PaginationRootProviderProps;
	RootProps: PaginationRootProps;
	ContextProps: PaginationContextProps;
	EllipsisProps: PaginationEllipsisProps;
	ItemProps: PaginationItemProps;
	NextTriggerProps: PaginationNextTriggerProps;
	PrevTriggerProps: PaginationPrevTriggerProps;
	FirstTriggerProps: PaginationFirstTriggerProps;
	LastTriggerProps: PaginationLastTriggerProps;
	Props: PaginationRootProps;
};

export type {
	PaginationItemLabelDetails,
	PaginationPageChangeDetails,
	PaginationPageSizeChangeDetails,
	PaginationPageUrlDetails,
	UsePaginationContext,
	UsePaginationProps,
	UsePaginationReturn,
} from "@ark-ui/react/pagination";

export { usePagination, usePaginationContext } from "@ark-ui/react/pagination";

export {
	PaginationContext,
	PaginationEllipsis,
	PaginationFirstTrigger,
	PaginationItem,
	PaginationLastTrigger,
	PaginationNextTrigger,
	PaginationPrevTrigger,
	PaginationRoot,
	PaginationRootProvider,
};
