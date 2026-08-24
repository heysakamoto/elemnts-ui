import { type Assign, ark } from "@ark-ui/react";
import { Combobox } from "@ark-ui/react/combobox";
import type { ReactElement } from "react";

import {
	createStyleContext,
	type HTMLStyledProps,
} from "../../../styled-system/jsx";
import {
	type ComboboxRecipeVariantProps,
	comboboxRecipe,
} from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(comboboxRecipe);

export type ComboboxRootProviderProps<T = any> = Assign<
	Combobox.RootProviderProps<T>,
	HTMLStyledProps<"div"> & ComboboxRecipeVariantProps
>;
type ComboboxRootProviderComponent = {
	<T = any>(props: ComboboxRootProviderProps<T>): ReactElement | null;
	displayName?: string;
};
export const ComboboxRootProvider = withProvider(
	Combobox.RootProvider,
	"root",
) as ComboboxRootProviderComponent;

export type ComboboxRootProps<T = any> = Assign<
	Combobox.RootProps<T>,
	HTMLStyledProps<"div"> & ComboboxRecipeVariantProps
>;

type ComboboxRootComponent = {
	<T = any>(props: ComboboxRootProps<T>): ReactElement | null;
	displayName?: string;
};
export const ComboboxRoot = withProvider(
	Combobox.Root,
	"root",
) as ComboboxRootComponent;
ComboboxRoot.displayName = "ComboboxRoot";

export const ComboboxClearTrigger = withContext(
	Combobox.ClearTrigger,
	"clearTrigger",
);
ComboboxClearTrigger.displayName = "ComboboxClearTrigger";

export const ComboboxContent = withContext(Combobox.Content, "content");
ComboboxContent.displayName = "ComboboxContent";

export const ComboboxEmpty = withContext(Combobox.Empty, "empty");
ComboboxEmpty.displayName = "ComboboxEmpty";

export const ComboboxControl = withContext(Combobox.Control, "control");
ComboboxControl.displayName = "ComboboxControl";

export const ComboboxInput = withContext(Combobox.Input, "input");
ComboboxInput.displayName = "ComboboxInput";

export const ComboboxItem = withContext(Combobox.Item, "item");
ComboboxItem.displayName = "ComboboxItem";

export const ComboboxItemGroup = withContext(Combobox.ItemGroup, "itemGroup");
ComboboxItemGroup.displayName = "ComboboxItemGroup";

export const ComboboxItemGroupLabel = withContext(
	Combobox.ItemGroupLabel,
	"itemGroupLabel",
);
ComboboxItemGroupLabel.displayName = "ComboboxItemGroupLabel";

export const ComboboxItemIndicator = withContext(
	Combobox.ItemIndicator,
	"itemIndicator",
);
ComboboxItemIndicator.displayName = "ComboboxItemIndicator";

export const ComboboxItemText = withContext(Combobox.ItemText, "itemText");
ComboboxItemText.displayName = "ComboboxItemText";

export const ComboboxLabel = withContext(Combobox.Label, "label");
ComboboxLabel.displayName = "ComboboxLabel";

export const ComboboxList = withContext(Combobox.List, "list");
ComboboxList.displayName = "ComboboxList";

export const ComboboxTrigger = withContext(Combobox.Trigger, "trigger");
ComboboxTrigger.displayName = "ComboboxTrigger";

export const ComboboxPositioner = withContext(
	Combobox.Positioner,
	"positioner",
);
ComboboxPositioner.displayName = "ComboboxPositioner";

export const ComboboxIndicatorGroup = withContext(ark.div, "indicatorGroup", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "combobox",
		"data-part": "indicator-group",
	},
});
ComboboxIndicatorGroup.displayName = "ComboboxIndicatorGroup";

export const ComboboxContext = Combobox.Context;

export const ComboboxItemContext = Combobox.ItemContext;
