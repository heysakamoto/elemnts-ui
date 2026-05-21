import { Pagination } from "@ark-ui/react/pagination";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { paginationRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(paginationRecipe);

export const PaginationRootProvider = withProvider(
	Pagination.RootProvider,
	"root",
);
PaginationRootProvider.displayName = "PaginationProvider";

export const PaginationRoot = withProvider(Pagination.Root, "root");
PaginationRoot.displayName = "PaginationRoot";

export const PaginationContext = Pagination.Context;

export const PaginationEllipsis = withContext(Pagination.Ellipsis, "ellipsis");
PaginationEllipsis.displayName = "PaginationEllipsis";

export const PaginationItem = withContext(Pagination.Item, "item");
PaginationItem.displayName = "PaginationItem";

export const PaginationNextTrigger = withContext(
	Pagination.NextTrigger,
	"nextTrigger",
);
PaginationNextTrigger.displayName = "PaginationNextTrigger";

export const PaginationPrevTrigger = withContext(
	Pagination.PrevTrigger,
	"prevTrigger",
);
PaginationPrevTrigger.displayName = "PaginationPrevTrigger";

export const PaginationFirstTrigger = withContext(
	Pagination.FirstTrigger,
	"firstTrigger",
);
PaginationFirstTrigger.displayName = "PaginationFirstTrigger";

export const PaginationLastTrigger = withContext(
	Pagination.LastTrigger,
	"lastTrigger",
);
PaginationLastTrigger.displayName = "PaginationLastTrigger";
