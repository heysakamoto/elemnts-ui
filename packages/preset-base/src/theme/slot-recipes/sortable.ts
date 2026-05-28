import { defineSlotRecipe } from "@pandacss/dev";

export const sortableRecipe = defineSlotRecipe({
	className: "sortable",
	slots: ["root", "itemHandle", "item"],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
		},
		itemHandle: {
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
		},
		item: {
			display: "flex",
			flexDirection: "column",
		},
	},
});
