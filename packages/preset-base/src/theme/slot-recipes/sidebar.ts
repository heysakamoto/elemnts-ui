import { defineSlotRecipe } from "@pandacss/dev";

export const sidebarRecipe = defineSlotRecipe({
	className: "sidebar",
	slots: ["root", "header", "content", "footer", "group", "item", "trigger"],
	base: {
		trigger: {},
		group: {
			display: "flex",
			flexDirection: "column",
		},
	},
});
