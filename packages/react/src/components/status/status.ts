import { ark } from "@ark-ui/react/factory";

import { createStyleContext } from "../../../styled-system/jsx";
import { statusRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(statusRecipe);

export const StatusRoot = withProvider(ark.div, "root", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "status",
		"data-part": "root",
	},
});
StatusRoot.displayName = "StatusRoot";

export const StatusIndicator = withContext(ark.div, "indicator", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "status",
		"data-part": "indicator",
	},
});
StatusIndicator.displayName = "StatusIndicator";

export const StatusText = withContext(ark.span, "text", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "status",
		"data-part": "text",
	},
});
StatusText.displayName = "StatusText";
