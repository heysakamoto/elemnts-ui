import { defineSlotRecipe } from "@pandacss/dev";

export const blockquoteRecipe = defineSlotRecipe({
	className: "blockquote",
	slots: ["root", "cite", "caption", "indication", "content"],
	base: {
		root: {
			display: "flex",
			position: "relative",
			flexDirection: "column",
			gap: "calc({spacing.4} * 4)",
		},
		caption: {
			fontSize: "12",
			color: "{colors.fg.tertiary}",
		},
		indication: {
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
		},
	},
});
