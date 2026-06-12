import { defineSlotRecipe } from "@pandacss/dev";

export const emptyStateRecipe = defineSlotRecipe({
	className: "empty-state",
	slots: ["root", "content", "title", "description", "indicator", "control"],
	base: {
		root: {
			w: "{sizes.full}",
		},
		content: {
			display: "flex",
			alignItems: "center",
			flexDirection: "column",
			justifyContent: "center",
		},
		control: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		indicator: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			color: "{colors.icon.secondary}",
		},
		title: {
			fontWeight: "500",
			fontSize: "{fontSizes.16}",
			color: "{colors.fg.primary}",
			lineHeight: "{lineHeights.xs}",
		},
		description: {
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.secondary}",
		},
	},
});
