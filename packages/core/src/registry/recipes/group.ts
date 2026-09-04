import { defineRecipe } from "@pandacss/dev";

export const groupRecipe = defineRecipe({
	className: "group",
	description: "A container for grouping related components",
	base: {
		display: "flex",
		alignItems: "center",
	},
	variants: {
		fullWidth: {
			true: {
				w: "{sizes.full}",
				"& > *": {
					w: "{sizes.full}",
				},
			},
		},
		attached: {
			true: {
				gap: "calc({sizes.4} * 0)",
			},
			false: {
				gap: "calc({sizes.4} * 2)",
			},
		},
		orientation: {
			horizontal: {
				flexDirection: "row",
			},
			vertical: {
				flexDirection: "column",
			},
		},
	},
	compoundVariants: [
		{
			attached: true,
			orientation: "horizontal",
			css: {
				"& > *:not(:first-child)": {
					borderLeft: "none",
				},
				"& > *:first-child": {
					roundedEnd: "0",
				},
				"& > *:last-child": {
					roundedStart: "0",
				},
				"& > *:not(:first-child):not(:last-child)": {
					rounded: "0",
				},
			},
		},
		{
			attached: true,
			orientation: "vertical",
			css: {
				"& > *:not(:first-child)": {
					borderTop: "none",
				},
				"& > *:first-child": {
					roundedBottom: "0",
				},
				"& > *:last-child": {
					roundedTop: "0",
				},
				"& > *:not(:first-child):not(:last-child)": {
					rounded: "0",
				},
			},
		},
	],
	defaultVariants: {
		fullWidth: false,
		attached: false,
		orientation: "horizontal",
	},
});
