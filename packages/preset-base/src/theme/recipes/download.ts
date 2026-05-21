import { defineRecipe } from "@pandacss/dev";

export const downloadRecipe = defineRecipe({
	className: "download",
	base: {
		cursor: "pointer",
		position: "relative",
		alignItems: "center",
		display: "inline-flex",
		lineHeight: "{lineHeights.none}",
	},
});
