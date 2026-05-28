import { defineSlotRecipe } from "@pandacss/dev";

export const listRecipe = defineSlotRecipe({
	className: "list",
	slots: ["root", "item", "indicator"],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
			gap: "",
		},
		item: {
			whiteSpace: "normal",
			display: "list-item",
		},
		indicator: {
			minH: "1lh",
			flexShrink: "0",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
			verticalAlign: "middle",
			marginEnd: "calc({spacing.4} * 4)",
		},
	},
});
