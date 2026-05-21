import { type Assign, Select } from "@ark-ui/react";
import {
	createStyleContext,
	type HTMLStyledProps,
} from "@moto-ui/styled-system/jsx";
import {
	type SelectRecipeVariantProps,
	selectRecipe,
} from "@moto-ui/styled-system/recipes";
import type { ReactElement } from "react";

const { withProvider, withContext } = createStyleContext(selectRecipe);

export type SelectRootProviderProps<T = any> = Assign<
	Select.RootProviderProps<T>,
	HTMLStyledProps<"div"> & SelectRecipeVariantProps
>;
type SelectRootProviderComponent = {
	<T = any>(props: SelectRootProviderProps<T>): ReactElement;
	displayName?: string;
};
export const SelectRootProvider = withProvider(
	Select.RootProvider,
	"root",
) as SelectRootProviderComponent;
SelectRootProvider.displayName = "SelectRootProvider";

export type SelectRootProps<T = any> = Assign<
	Select.RootProps<T>,
	HTMLStyledProps<"div"> & SelectRecipeVariantProps
>;
type SelectRootComponent = {
	<T = any>(props: SelectRootProps<T>): ReactElement;
	displayName?: string;
};
export const SelectRoot = withProvider(
	Select.Root,
	"root",
) as SelectRootComponent;
SelectRoot.displayName = "SelectRoot";

export const SelectClearTrigger = withContext(
	Select.ClearTrigger,
	"clearTrigger",
);
SelectClearTrigger.displayName = "SelectClearTrigger";

export const SelectContent = withContext(Select.Content, "content");
SelectContent.displayName = "SelectContent";

export const SelectContext = Select.Context;

export const SelectItemContext = Select.ItemContext;

export const SelectControl = withContext(Select.Control, "control");
SelectControl.displayName = "SelectControl";

export const SelectIndicator = withContext(Select.Indicator, "indicator");
SelectIndicator.displayName = "SelectIndicator";

export const SelectItem = withContext(Select.Item, "item");
SelectItem.displayName = "SelectItem";

export const SelectItemGroup = withContext(Select.ItemGroup, "itemGroup");
SelectItemGroup.displayName = "SelectItemGroup";

export const SelectItemGroupLabel = withContext(
	Select.ItemGroupLabel,
	"itemGroupLabel",
);
SelectItemGroupLabel.displayName = "SelectItemGroupLabel";

export const SelectItemIndicator = withContext(
	Select.ItemIndicator,
	"itemIndicator",
);
SelectItemIndicator.displayName = "SelectItemIndicator";

export const SelectItemText = withContext(Select.ItemText, "itemText");
SelectItemText.displayName = "SelectItemText";

export const SelectLabel = withContext(Select.Label, "label");
SelectLabel.displayName = "SelectLabel";

export const SelectPositioner = withContext(Select.Positioner, "positioner");
SelectPositioner.displayName = "SelectPositioner";

export const SelectTrigger = withContext(Select.Trigger, "trigger");
SelectTrigger.displayName = "SelectTrigger";

export const SelectValueText = withContext(Select.ValueText, "valueText");
SelectValueText.displayName = "SelectValueText";

export const SelectHiddenSelect = withContext(
	Select.HiddenSelect,
	"hiddenSelect",
);
SelectHiddenSelect.displayName = "SelectHiddenSelect";
