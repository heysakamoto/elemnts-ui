import { defineRecipe } from "@pandacss/dev";

export const visuallyHiddenRecipe = defineRecipe({
	className: "v-hidden",
	base: {
		p: "0",
		m: "-1px",
		border: "none",
		boxSize: "1px",
		overflow: "hidden",
		whiteSpace: "nowrap",
		position: "absolute",
		clip: "rect(0 0 0 0)",
	},
});
