import { defineSlotRecipe } from "@pandacss/dev";

export const sliderRecipe = defineSlotRecipe({
	className: "slider",
	slots: [
		"root",
		"control",
		"label",
		"step",
		"marker",
		"range",
		"thumb",
		"valueText",
		"track",
		"markerGroup",
		"stepGroup",
	],
	base: {
		root: {
			"--slider-bg": "{colors.colorPalette.primary}",

			display: "flex",
			flexDirection: "column",
			gap: "calc({sizes.4} * 2)",
		},
		control: {
			display: "flex",
			w: "{sizes.full}",
			alignItems: "center",
			tranformOrign: "center",
			gap: "calc({spacing.4} * 3)",

			"& > svg": {
				color: "{colors.icon.secondary}",
			},

			_vertical: {
				h: "{sizes.full}",
				flexDirection: "column",
			},

			_horizontal: {
				w: "{sizes.full}",
				flexDirection: "row",
			},
		},
		track: {
			rounded: "full",
			overflow: "clip",
			bgColor: "{colors.bg.secondary}",
			transition: "scale 200ms ease-in-out",

			_vertical: {
				w: "var(--slider-track-size)",
				h: "{sizes.full}",
			},

			_horizontal: {
				h: "var(--slider-track-size)",
				w: "{sizes.full}",
			},
		},
		range: {
			bgColor: "var(--slider-bg)",
			alignItems: "center",
			rounded: "{radii.full}",
			display: "inline-flex",
			justifyContent: "center",

			_horizontal: { h: "{sizes.full}" },
			_vertical: { w: "{sizes.full}" },
		},
		thumb: {
			cursor: "pointer",
			position: "relative",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
			transition: `transform 150ms ease-out`,

			_after: {
				content: "''",
				position: "absolute",
			},

			_before: {
				content: "''",
				position: "absolute",
				rounded: "{radii.full}",
				bgColor: "{colors.colorPalette.tertiary}",
				shadow: "{shadows.3}, 0 0 0 1px {colors.stroke.secondary}",
			},

			_horizontal: {
				h: "{sizes.full}",
				_before: {
					w: "calc(var(--slider-track-size) * 3)",
					h: "calc(var(--slider-track-size) * 2)",
				},
				_after: {
					w: "calc(var(--slider-track-size) * 9)",
					h: "calc(var(--slider-track-size) * 6)",
				},
			},

			_vertical: {
				w: "{sizes.full}",
				_before: {
					h: "calc(var(--slider-track-size) * 3)",
					w: "calc(var(--slider-track-size) * 2)",
				},
				_after: {
					h: "calc(var(--slider-track-size) * 9)",
					w: "calc(var(--slider-track-size) * 6)",
				},
			},
		},
		stepGroup: {
			_vertical: {
				left: "-100%",
				alignSelf: "stretch",
			},
			_horizontal: {
				top: "calc(var(--slider-track-size) * -1)",
			},
		},
		step: {
			_disabled: {
				opacity: 0.5,
				cursor: "not-allowed !important",
			},

			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			boxSize: "var(--slider-track-size)",

			_before: {
				content: "''",
				rounded: "{radii.full}",
				bgColor: "{colors.bg.indicator}",
			},

			"&[data-state=under-value]": {
				_before: {
					bgColor: "{colors.colorPalette.tertiary}",
				},
			},
		},
		marker: {
			fontSize: "{fontSizes.14}",
		},
		label: {},
		valueText: {
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.primary}",
			lineHeight: "{lineHeights.none}",
		},
	},
	variants: {
		size: {
			xs: {
				root: {
					"--slider-track-size": "calc({sizes.4} * 1)",
				},
			},
			sm: {
				root: {
					"--slider-track-size": "calc({sizes.4} * 1.5)",
				},
			},
			md: {
				root: {
					"--slider-track-size": "calc({sizes.4} * 2)",
				},
			},
			lg: {
				root: {
					"--slider-track-size": "calc({sizes.4} * 3)",
				},
			},
			xl: {
				root: {
					"--slider-track-size": "calc({sizes.4} * 4)",
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});
