import { defineSlotRecipe } from "@pandacss/dev";

export const breadcrumbRecipe = defineSlotRecipe({
	className: "breadcrumb",
	slots: [
		"root",
		"list",
		"item",
		"link",
		"currentLink",
		"separator",
		"ellipsis",
	],
	base: {
		list: {
			display: "flex",
			alignItems: "center",
			wordBreak: "break-word",
			color: "{colors.fg.tertiary}",
		},
		link: {
			outline: "none",
			textDecoration: "none",
		},
		item: {
			alignItems: "center",
			display: "inline-flex",
			fontSize: "{fontSizes.14}",
			lineHeight: "{lineHeights.none}",
		},
		separator: {
			opacity: "0.8",
			alignItems: "center",
			boxSize: "fit-content",
			display: "inline-flex",
			justifyContent: "center",
			mx: "calc({spacing.4} * 2)",
			color: "{colors.fg.tertiary}",
			_rtl: {
				rotate: "180deg",
			},
		},
		ellipsis: {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
		},
	},
});
