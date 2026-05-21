import { defineSlotRecipe } from "@pandacss/dev";

const treeIndentation = {
	"--tree-depth": "calc(var(--depth) - 1)",
	"--tree-indentation-offset":
		"calc(var(--tree-indentation) * var(--tree-depth))",
	"--tree-icon-offset": "calc(var(--tree-icon-size) * var(--tree-depth) * 0.5)",
	"--tree-offset":
		"calc(var(--tree-padding-inline) + var(--tree-indentation-offset) + var(--tree-icon-offset))",

	paddingInlineStart: "var(--tree-offset)",
	paddingInlineEnd: "var(--tree-padding-inline)",
};

const svg = {
	"& > svg": {
		boxSize: "var(--tree-icon-size)",
	},
};

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
			"--tree-item-gap": "{sizes.8}",
			"--tree-space-y": "{spacing.2}",
			"--tree-icon-size": "{sizes.16}",
			"--tree-indentation": "{sizes.16}",
			"--tree-item-height": "{sizes.24}",
			"--tree-padding-inline": "{sizes.8}",

			display: "flex",
			gap: "{spacing.4}",
			flexDirection: "column",
		},
		nodeCheckbox: {
			h: "{sizes.full}",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
		},
		tree: {
			display: "flex",
			flexDirection: "column",
			gap: "var(--tree-space-y)",
		},
		itemText: {
			flex: "1",
		},
		branch: {
			display: "flex",
			flexDirection: "column",
			gap: "var(--tree-space-y)",
		},
		branchText: {
			flex: "1",
		},
		branchContent: {
			display: "flex",
			position: "relative",
			flexDirection: "column",
			gap: "var(--tree-space-y)",

			"&:is([data-empty])": {
				display: "none",
			},
		},
		branchIndentGuide: {
			zIndex: "1",
			w: "{sizes.1}",
			position: "absolute",
			bg: "{colors.stroke.primary}",
			h: "calc({sizes.full} - (var(--tree-item-height) / 2))",

			"--tree-depth": "calc(var(--depth) - 1)",
			"--tree-indentation-offset":
				"calc(var(--tree-indentation) * var(--tree-depth))",
			"--tree-offset":
				"calc(var(--tree-padding-inline) + var(--tree-indentation-offset))",
			"--tree-icon-offset": "calc(var(--tree-icon-size) * 0.5 * var(--depth))",

			insetInlineStart: "calc(var(--tree-offset) + var(--tree-icon-offset))",
		},

		branchControl: {
			h: "var(--tree-item-height)",
			gap: "var(--tree-item-gap)",

			...treeIndentation,
			...svg,
		},
		item: {
			h: "var(--tree-item-height)",
			gap: "var(--tree-item-gap)",

			...treeIndentation,
			...svg,
		},

		branchIndicator: {
			color: "{colors.icon.secondary}",

			transition: `
        rotate 150ms ease-in,
        color 100ms ease-in-out
      `,

			"&:is([data-state=open])": {
				svg: {
					rotate: "180deg",
					color: "{colors.icon.primary}",
				},
			},
		},
	},
});
