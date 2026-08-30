import { defineSlotRecipe } from "@pandacss/dev";

export const treeViewRecipe = defineSlotRecipe({
	className: "tree-view",
	slots: [
		"root",
		"label",
		"tree",
		"item",
		"itemIndicator",
		"itemText",
		"branch",
		"branchControl",
		"branchTrigger",
		"branchContent",
		"branchText",
		"branchIndicator",
		"branchIndentGuide",
		"nodeRenameInput",
		"nodeCheckbox",
	],
	base: {
		label: {},
		root: {
			display: "flex",
			gap: "{spacing.4}",
			flexDirection: "column",
		},

		nodeCheckbox: {
			alignItems: "center",
			display: "inline-flex",
		},

		item: {
			display: "flex",
		},

		branchControl: {
			display: "flex",
		},

		branchIndentGuide: {
			w: 1,
			top: 0,
			zIndex: 1,
			h: "{sizes.full}",
			position: "absolute",
			bgColor: "{colors.stroke.primary}",
		},

		branchIndicator: {
			color: "inherit",

			transition: `
        rotate 150ms ease-in,
        color 100ms ease-in-out
      `,

			_open: {
				svg: {
					rotate: "180deg",
				},
			},
		},

		branchContent: {
			display: "flex",
			position: "relative",
			flexDirection: "column",
		},

		branchText: {
			alignItems: "center",
			display: "inline-flex",
			gap: "calc({spacing.4} * 2)",
		},
	},
});
