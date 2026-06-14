import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { emptyStateRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(emptyStateRecipe);

export const EmptyStateRoot = withProvider(ark.div, "root", {
	dataAttr: true,
	defaultProps: {
		"data-part": "root",
		"data-scope": "empty-state",
	},
});
EmptyStateRoot.displayName = "EmptyStateRoot";

export const EmptyStateTitle = withContext(ark.strong, "title", {
	dataAttr: true,
	defaultProps: {
		"data-part": "title",
	},
});
EmptyStateTitle.displayName = "EmptyStateTitle";

export const EmptyStateDescription = withContext(ark.p, "description", {
	dataAttr: true,
	defaultProps: {
		"data-part": "description",
	},
});
EmptyStateDescription.displayName = "EmptyStateDescription";

export const EmptyStateIndicator = withContext(ark.div, "indicator", {
	dataAttr: true,
	defaultProps: {
		"data-part": "indicator",
	},
});
EmptyStateIndicator.displayName = "EmptyStateIndicator";

export const EmptyStateContent = withContext(ark.div, "content", {
	dataAttr: true,
	defaultProps: {
		"data-part": "content",
	},
});
EmptyStateContent.displayName = "EmptyStateContent";

export const EmptyStateControl = withContext(ark.div, "control", {
	dataAttr: true,
	defaultProps: {
		"data-part": "control",
	},
});
EmptyStateControl.displayName = "EmptyStateControl";
