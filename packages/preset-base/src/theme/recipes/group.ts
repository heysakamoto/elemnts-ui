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
					flex: "1 1 0%",
				},
			},
		},
		attached: {
			true: {
				"& > *": {
					rounded: 0,
				},
			},
			false: {
				gap: "calc({sizes.4} * 1)",
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
					marginLeft: "-1px",
					borderLeft: "none",
				},
			},
		},
		{
			attached: true,
			orientation: "vertical",
			css: {
				"& > *:not(:first-child)": {
					borderTop: "none",
					marginTop: "-1px",
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
