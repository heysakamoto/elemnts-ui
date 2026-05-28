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
			outline: "0",
			textDecoration: "none",
		},
		item: {
			display: "inline-flex",
			alignItems: "center",
		},
		separator: {
			opacity: "0.8",
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
