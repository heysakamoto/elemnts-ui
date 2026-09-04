import { ark } from "@ark-ui/react";
import { createStyleContext } from "../../styled-system/jsx";
import { dataListRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(dataListRecipe);

export const DataListRoot = withProvider(ark.div, "root", {
	dataAttr: true,
	defaultProps: {
		"data-part": "root",
		"data-scope": "data-list",
	},
});
DataListRoot.displayName = "Root";

export const DataListItem = withContext(ark.dl, "item", {
	dataAttr: true,
	defaultProps: {
		"data-part": "item",
		"data-scope": "data-list",
	},
});
DataListItem.displayName = "Item";

export const DataListItemLabel = withContext(ark.dt, "itemLabel", {
	dataAttr: true,
	defaultProps: {
		"data-part": "item-label",
		"data-scope": "data-list",
	},
});
DataListItemLabel.displayName = "ItemLabel";

export const DataListItemValue = withContext(ark.dd, "itemValue", {
	dataAttr: true,
	defaultProps: {
		"data-part": "item-value",
		"data-scope": "data-list",
	},
});
DataListItemValue.displayName = "ItemValue";
