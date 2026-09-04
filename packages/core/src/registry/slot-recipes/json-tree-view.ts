import { defineSlotRecipe } from "@pandacss/dev";
import { variant } from "../constants/variant";

export const jsonTreeViewRecipe = defineSlotRecipe({
	className: "json-tree-view",
	slots: ["root", "tree"],
	base: {
		root: {
			w: "full",
			fontFamily: "mono",

			"& [data-part='branch']": {
				overflow: "clip",
			},

			"& [data-part='branch-content']": {
				position: "relative",
			},

			"& [data-part='branch-indent-guide']": {
				h: "full",
				w: "1px",
				position: "absolute",
				bgColor: "{colors.stroke.primary}",
				insetInlineStart: "calc((var(--depth) - 1) * 1rem)",

				"&[data-depth='1']": {
					insetInlineStart: "0.75rem",
				},
			},

			"& [data-part='branch-control']": {
				py: "4px",
				display: "flex",
				userSelect: "none",
				rounded: "calc({radii.4} * 2)",
				paddingInlineStart: "calc((var(--depth) - 1) * 1rem)",

				"& [data-part='branch-text']": {
					truncate: true,
				},

				"&[data-depth='1']": {
					paddingInlineStart: "0.25rem",
				},

				_hover: {
					bgColor: variant.secondary._hover.backgroundColor,
					"& svg": {
						color: "{colors.fg.primary}",
					},
				},
			},

			"& [data-part='branch-indicator']": {
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				marginInlineEnd: "0.25rem",
				transformOrigin: "center",

				"&[data-state='open']": {
					transform: "rotate(90deg)",
				},
			},

			"& [data-part='item']": {
				display: "flex",
				position: "relative",
				rounded: "calc({radii.4} * 3)",
				paddingInlineStart: "calc(((var(--depth) - 1) * 0.75rem) + 0.75rem)",

				"&[data-depth='1']": {
					paddingInlineStart: "1.5rem",
				},

				"&:hover": {
					bgColor: "{colors.bg.secondary}",
				},
			},

			"& [data-part='item-text'],&[data-part='branch-text']": {
				display: "flex",
				alignItems: "baseline",
			},
		},
		tree: {
			display: "flex",
			lineHeight: 1.8,
			fontFamily: "mono",
			flexDirection: "column",
			fontSize: "{fontSizes.12}",

			"& svg": {
				width: "1rem",
				height: "1rem",
				color: "{colors.fg.tertiary}",
			},

			/* JSON value types */
			"& [data-type='string']": {
				color: "{colors.orange.80}",
				_dark: {
					color: "{colors.orange.60}",
				},
			},

			"& [data-type='number']": {
				color: "{colors.blue.70}",
				_dark: {
					color: "{colors.blue.50}",
				},
			},

			"& [data-type='boolean']": {
				color: "{colors.green.80}",
				fontWeight: 600,
				_dark: {
					color: "{colors.green.60}",
				},
			},

			"& [data-type='null'], & [data-type='undefined']": {
				color: "{colors.orange.80}",
				fontWeight: 600,
				fontStyle: "italic",
				_dark: {
					color: "{colors.orange.60}",
				},
			},

			"& [data-type='function']": {
				color: "{colors.orange.80}",
				fontStyle: "italic",
				_dark: {
					color: "{colors.orange.60}",
				},
			},

			"& [data-type='date']": {
				color: "{colors.blue.70}",
				_dark: {
					color: "{colors.blue.50}",
				},
			},

			"& [data-type='error']": {
				color: "{colors.red.60}",
				fontWeight: 500,
				_dark: {
					color: "{colors.red.50}",
				},
			},

			"& [data-type='regex']": {
				color: "{colors.purple.60}",
				_dark: {
					color: "{colors.purple.50}",
				},
			},

			/* Syntax elements */
			"& [data-kind='brace']": {
				color: "{colors.fg.tertiary}",
				fontWeight: 700,
				_dark: {
					color: "{colors.fg.tertiary}",
				},
			},

			"& [data-kind='key']": {
				color: "{colors.green.100}",
				fontWeight: 500,
				_dark: {
					color: "{colors.green.60}",
				},
			},

			"& [data-kind='colon']": {
				color: "{colors.fg.tertiary}",
				marginInline: "0.25rem",
			},

			"& [data-kind='preview-text']": {
				color: "{colors.fg.tertiary}",
				fontStyle: "italic",
			},

			"& [data-kind='constructor']": {
				color: "{colors.fg.secondary}",
				fontWeight: 500,
			},
		},
	},
});
