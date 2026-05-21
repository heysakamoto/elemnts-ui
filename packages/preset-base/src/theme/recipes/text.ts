import { defineRecipe } from "@pandacss/dev";

export const textRecipe = defineRecipe({
	className: "text",
	base: {
		textWrap: "pretty",
	},
	variants: {
		truncate: {
			true: {
				overflow: "hidden",
				whiteSpace: "nowrap",
				textOverflow: "ellipsis",
			},
		},
	},
	defaultVariants: {
		truncate: false,
	},
});
