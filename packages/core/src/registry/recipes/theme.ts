import { defineRecipe } from "@pandacss/dev";

export const themeRecipe = defineRecipe({
	className: "theme",
	base: {
		"&[data-color-scheme=dark]": {
			colorScheme: "dark",
		},
		"&[data-color-scheme=light]": {
			colorScheme: "light",
		},
	},
});
