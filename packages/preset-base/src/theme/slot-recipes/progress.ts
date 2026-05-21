import { defineSlotRecipe } from "@pandacss/dev";

export const progressRecipe = defineSlotRecipe({
	className: "progress",
	slots: [
		"circle",
		"range",
		"root",
		"label",
		"track",
		"valueText",
		"view",
		"circleTrack",
		"circleRange",
	],
	base: {
		root: {
			gap: "2",
			colorPalette: "accent",
			display: "flex",
			flexDirection: "column",
		},
		label: {},
		valueText: {
			fontSize: "14",
			lineHeight: "{lineHeights.none}",
		},
		circle: {
			boxSize: "var(--size)",
		},
		circleTrack: {
			stroke: "{colors.stroke.primary}",
		},
		track: {
			w: "{sizes.full}",
			overflow: "hidden",
			rounded: "{radii.full}",
			bg: "{colors.bg.secondary}",
		},
		range: {
			h: "{sizes.full}",
			bg: "{colors.colorPalette.primary}",
			transition: "width 0.2s ease-in-out",
			_indeterminate: {
				w: "{sizes.full}",
				animation: "progress-linear 2s infinite linear",
				transformOrigin: "left",
			},
		},
		circleRange: {
			stroke: "{colors.colorPalette.primary}",
			_indeterminate: {
				animation: "progress-circular 2s infinite ease-in-out",
			},
		},
	},
	variants: {
		size: {
			xs: {
				track: { h: "calc({sizes.4} * 0.5)" },
				circle: { "--size": "calc({sizes.4} * 5)" },
			},
			sm: {
				track: { h: "calc({sizes.4} * 1)" },
				circle: { "--size": "calc({sizes.4} * 6)" },
			},
			md: {
				track: { h: "calc({sizes.4} * 1.5)" },
				circle: { "--size": "calc({sizes.4} * 7)" },
			},
			lg: {
				track: { h: "calc({sizes.4} * 2)" },
				circle: { "--size": "calc({sizes.4} * 8)" },
			},
			xl: {
				track: { h: "calc({sizes.4} * 2.5)" },
				circle: { "--size": "calc({sizes.4} * 9)" },
			},
		},
		thickness: {
			xs: {
				root: { "--thickness": "calc({sizes.2} * 0.5)" },
			},
			sm: {
				root: { "--thickness": "calc({sizes.2} * 1)" },
			},
			md: {
				root: { "--thickness": "calc({sizes.2} * 1.5)" },
			},
			lg: {
				root: { "--thickness": "calc({sizes.2} * 2)" },
			},
			xl: {
				root: { "--thickness": "calc({sizes.2} * 2.5)" },
			},
		},
	},
	defaultVariants: {
		size: "md",
		thickness: "sm",
	},
});
