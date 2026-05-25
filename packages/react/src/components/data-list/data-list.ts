import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { dataListRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(dataListRecipe);

export const DataListRoot = withProvider(ark.div, "root");
DataListRoot.displayName = "Root";

export const DataListItem = withContext(ark.dl, "item");
DataListItem.displayName = "Item";

export const DataListItemLabel = withContext(ark.dt, "itemLabel");
DataListItemLabel.displayName = "ItemLabel";

export const DataListItemValue = withContext(ark.dd, "itemValue");
DataListItemValue.displayName = "ItemValue";
