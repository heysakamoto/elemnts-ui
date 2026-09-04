import { ark } from "@ark-ui/react";
import { styled } from "../../styled-system/jsx";
import { swatchRecipe } from "../../styled-system/recipes";

export const Swatch = styled(ark.div, swatchRecipe, {
	defaultProps: {
		"data-scope": "swatch",
		"data-part": "root",
	},
});
Swatch.displayName = "Swatch";
