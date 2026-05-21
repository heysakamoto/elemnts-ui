import { ark } from "@ark-ui/react/factory";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { badgeRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(badgeRecipe);

export const BadgeRoot = withProvider(ark.div, "root", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "badge",
		"data-part": "root",
	},
});
BadgeRoot.displayName = "BadgeRoot";

export const BadgeIndicator = withContext(ark.div, "indicator", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "badge",
		"data-part": "indicator",
	},
});
BadgeIndicator.displayName = "BadgeIndicator";
