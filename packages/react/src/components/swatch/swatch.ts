import { ark } from "@ark-ui/react";
import { styled } from "@moto-ui/styled-system/jsx";
import { swatchRecipe } from "@moto-ui/styled-system/recipes";

export const Swatch = styled(ark.div, swatchRecipe, {
	defaultProps: {
		"data-scope": "color-swatch",
		"data-part": "root",
	},
});
Swatch.displayName = "Swatch";
