import { type Assign, Listbox } from "@ark-ui/react";
import {
	createStyleContext,
	type HTMLStyledProps,
} from "@moto-ui/styled-system/jsx";
import {
	type ListboxRecipeVariantProps,
	listboxRecipe,
} from "@moto-ui/styled-system/recipes";
import type { ReactElement } from "react";

const { withProvider, withContext } = createStyleContext(listboxRecipe);

export type ListboxRootProviderProps<T = any> = Assign<
	Listbox.RootProviderProps<T>,
	HTMLStyledProps<"div"> & ListboxRecipeVariantProps
>;
type ListboxRootProviderComponent = {
	<T = any>(props: ListboxRootProviderProps<T>): ReactElement;
	displayName?: string;
};
export const ListboxRootProvider = withProvider(
	Listbox.RootProvider,
	"root",
) as ListboxRootProviderComponent;
ListboxRootProvider.displayName = "ListboxRootProvider";

export type ListboxRootProps<T> = Assign<
	Listbox.RootProps<T>,
	HTMLStyledProps<"div"> & ListboxRecipeVariantProps
>;

type ListboxRootComponent = {
	<T = any>(props: ListboxRootProps<T>): ReactElement;
	displayName?: string;
};
export const ListboxRoot = withProvider(
	Listbox.Root,
	"root",
) as ListboxRootComponent;
ListboxRoot.displayName = "ListboxRoot";

export const ListboxLabel = withContext(Listbox.Label, "label");
ListboxLabel.displayName = "ListboxLabel";

export const ListboxContent = withContext(Listbox.Content, "content");
ListboxContent.displayName = "ListboxContent";

export const ListboxItemGroup = withContext(Listbox.ItemGroup, "itemGroup");
ListboxItemGroup.displayName = "ListboxItemGroup";

export const ListboxItemGroupLabel = withContext(
	Listbox.ItemGroupLabel,
	"itemGroupLabel",
);
ListboxItemGroupLabel.displayName = "ListboxItemGroupLabel";

export const ListboxItem = withContext(Listbox.Item, "item");
ListboxItem.displayName = "ListboxItem";

export const ListboxItemText = withContext(Listbox.ItemText, "itemText");
ListboxItemText.displayName = "ListboxItemText";

export const ListboxInput = withContext(Listbox.Input, "input");
ListboxInput.displayName = "ListboxInput";

export const ListboxEmpty = withContext(Listbox.Empty, "empty");
ListboxEmpty.displayName = "ListboxEmpty";

export const ListboxValueText = withContext(Listbox.ValueText, "valueText");
ListboxValueText.displayName = "ListboxValueText";

export const ListboxItemIndicator = withContext(
	Listbox.ItemIndicator,
	"itemIndicator",
);
ListboxItemIndicator.displayName = "ListboxItemIndicator";

export const ListboxContext = Listbox.Context;

export const ListboxItemContext = Listbox.ItemContext;
