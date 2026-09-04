import { defineSlotRecipe } from "@pandacss/dev";

import { size } from "../constants/size";

export const segmentGroupRecipe = defineSlotRecipe({
	className: "segment-group",
	slots: ["root", "label", "item", "indicator", "itemText", "itemControl"],
	base: {
		label: {},
		itemControl: {
			display: "flex",
		},
		root: {
			zIndex: "1",
			display: "flex",
			w: "fit-content",
			alignItems: "center",
			p: "calc({spacing.2} * 0.5)",

			_vertical: {
				flexDirection: "column",
			},

			_horizontal: {
				flexDirection: "row",
			},

			_disabled: {
				opacity: 0.5,
				filter: "grayscale(100%)",
			},
		},

		item: {
			zIndex: 1,
			w: "{sizes.full}",
			cursor: "pointer",
			userSelect: "none",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
			gap: "calc({spacing.4} * 2)",
			color: "{colors.fg.tertiary}",
			lineHeight: "{lineHeights.none}",
			transition: "color 100ms ease-in-out",

			"&:not([data-state=checked])": {
				_hover: {
					color: "{colors.fg.primary}",
				},
			},

			_checked: {
				color: "var(--sg-color)",
			},

			_disabled: {
				opacity: 0.5,
				cursor: "not-allowed",
			},

			_focusVisible: {
				outlineOffset: "2px",
				outline: "2px solid {colors.colorPalette.primary}",
			},
		},
		itemText: {
			color: "inherit",
			textAlign: "center",
			fontSize: "inherit",
			lineHeight: "inherit",
		},
		indicator: {
			w: "var(--width)",
			h: "var(--height)",
			left: "var(--left)",
			border: "1px solid transparent",
		},
	},
	variants: {
		fullWidth: {
			true: {
				root: {
					w: "{sizes.full}",
				},
			},
		},
		size: {
			xs: {
				item: {
					h: size.xs.height,
					px: size.xs.paddingInline,
					fontSize: size.xs.fontSize,
					lineHeight: size.xs.lineHeight,
				},
				indicator: {
					borderRadius: size.xs.borderRadius,
				},
			},
			sm: {
				item: {
					h: size.sm.height,
					px: size.sm.paddingInline,
					fontSize: size.sm.fontSize,
					lineHeight: size.sm.lineHeight,
				},
				indicator: {
					borderRadius: size.sm.borderRadius,
				},
			},
			md: {
				item: {
					h: size.md.height,
					px: size.md.paddingInline,
					fontSize: size.md.fontSize,
					lineHeight: size.md.lineHeight,
				},
				indicator: {
					borderRadius: size.md.borderRadius,
				},
			},
			lg: {
				item: {
					h: size.lg.height,
					px: size.lg.paddingInline,
					fontSize: size.lg.fontSize,
					lineHeight: size.lg.lineHeight,
				},
				indicator: {
					borderRadius: size.lg.borderRadius,
				},
			},
			xl: {
				item: {
					h: size.xl.height,
					px: size.xl.paddingInline,
					fontSize: size.xl.fontSize,
					lineHeight: size.xl.lineHeight,
				},
				indicator: {
					borderRadius: size.xl.borderRadius,
				},
			},
		},
		variant: {
			primary: {
				item: {
					_checked: {
						color: "{colors.colorPalette.primary}",
					},
				},
				indicator: {
					bgColor: "{colors.surface.1}",
					borderColor: "{colors.stroke.primary}",
				},
			},
			secondary: {
				item: {
					_checked: {
						color: "{colors.colorPalette.tertiary}",
					},
				},
				indicator: {
					bgColor: "{colors.colorPalette.primary}",
				},
			},
			tertiary: {
				item: {
					_checked: {
						color: "{colors.colorPalette.primary}",
					},
				},
				indicator: {
					bgColor: "{colors.colorPalette.secondary}",
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		fullWidth: false,
		variant: "primary",
	},
});
