import { ark } from "@ark-ui/react/factory";
import { createStyleContext } from "../../styled-system/jsx";
import { alertRecipe } from "../../styled-system/recipes";
import { ElevatedBase } from "../elevated";

const { withProvider, withContext } = createStyleContext(alertRecipe);

export const AlertRoot = withProvider(ElevatedBase, "root", {
	dataAttr: true,
	defaultProps: {
		delta: 1,
		"data-part": "root",
		"data-scope": "alert",
	},
});
AlertRoot.displayName = "AlertRoot";

export const AlertTitle = withContext(ark.strong, "title", {
	dataAttr: true,
	defaultProps: {
		"data-part": "title",
		"data-scope": "alert",
	},
});
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = withContext(ark.p, "description", {
	dataAttr: true,
	defaultProps: {
		"data-part": "description",
		"data-scope": "alert",
	},
});
AlertDescription.displayName = "AlertDescription";

export const AlertControl = withContext(ark.div, "control", {
	dataAttr: true,
	defaultProps: {
		"data-part": "control",
		"data-scope": "alert",
	},
});
AlertControl.displayName = "AlertControl";

export const AlertContent = withContext(ark.div, "content", {
	dataAttr: true,
	defaultProps: {
		"data-part": "content",
		"data-scope": "alert",
	},
});
AlertContent.displayName = "AlertContent";

export const AlertIndicator = withContext(ark.div, "indicator", {
	dataAttr: true,
	defaultProps: {
		"data-part": "indicator",
		"data-scope": "alert",
	},
});
AlertIndicator.displayName = "AlertIndicator";
