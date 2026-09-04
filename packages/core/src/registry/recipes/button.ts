import { defineRecipe } from "@pandacss/dev";

import { size } from "../constants/size";
import { variant } from "../constants/variant";

export const buttonRecipe = defineRecipe({
	className: "btn",
	base: {
		w: "fit-content",
		userSelect: "none",
		position: "relative",
		alignItems: "center",
		display: "inline-flex",
		justifyContent: "center",
		transformOrigin: "center",
		border: "1px solid transparent",
		transition: `
      color 100ms ease-in,
      background-color 100ms ease-in
    `,

		_focusVisible: {
			outlineOffset: "-1px",
			outline: "2px solid {colors.accent.primary}",
		},

		_disabled: {
			opacity: 0.5,
			cursor: "not-allowed",
			pointerEvents: "none",
		},
	},

	variants: {
		size: {
			"2xs": {
				gap: size["2xs"].gap,
				height: size["2xs"].height,
				fontSize: size["2xs"].fontSize,
				lineHeight: size["2xs"].lineHeight,
				paddingInline: size["2xs"].paddingInline,
				borderRadius: size["2xs"].borderRadius,
			},
			xs: {
				gap: size.xs.gap,
				height: size.xs.height,
				fontSize: size.xs.fontSize,
				lineHeight: size.xs.lineHeight,
				paddingInline: size.xs.paddingInline,
				borderRadius: size.xs.borderRadius,
			},
			sm: {
				gap: size.sm.gap,
				fontSize: size.sm.fontSize,
				lineHeight: size.sm.lineHeight,
				height: size.sm.height,
				paddingInline: size.sm.paddingInline,
				borderRadius: size.sm.borderRadius,
			},
			md: {
				gap: size.md.gap,
				height: size.md.height,
				fontSize: size.md.fontSize,
				lineHeight: size.md.lineHeight,
				paddingInline: size.md.paddingInline,
				borderRadius: size.md.borderRadius,
			},
			lg: {
				gap: size.lg.gap,
				height: size.lg.height,
				fontSize: size.lg.fontSize,
				lineHeight: size.lg.lineHeight,
				paddingInline: size.lg.paddingInline,
				borderRadius: size.lg.borderRadius,
			},
			xl: {
				gap: size.xl.gap,
				height: size.xl.height,
				fontSize: size.xl.fontSize,
				lineHeight: size.xl.lineHeight,
				paddingInline: size.xl.paddingInline,
				borderRadius: size.xl.borderRadius,
			},
		},

		variant: {
			primary: {
				color: variant.primary.color,
				backgroundColor: variant.primary.backgroundColor,

				_hover: variant.primary._hover,
				_active: variant.primary._active,
			},
			secondary: {
				color: variant.secondary.color,
				backgroundColor: variant.secondary.backgroundColor,

				_hover: variant.secondary._hover,
				_active: variant.secondary._active,
			},
			tertiary: {
				color: variant.tertiary.color,
				borderColor: variant.tertiary.borderColor,
				backgroundColor: variant.tertiary.backgroundColor,

				_hover: variant.tertiary._hover,
				_active: variant.tertiary._active,
			},
			ghost: {
				color: variant.ghost.color,
				backgroundColor: variant.ghost.backgroundColor,

				_hover: variant.ghost._hover,
				_active: variant.ghost._active,
			},
			surface: {
				color: variant.surface.color,
				borderColor: variant.surface.borderColor,
				backgroundColor: variant.surface.backgroundColor,

				_hover: variant.surface._hover,
				_active: variant.surface._active,
			},
			plain: {
				color: variant.plain.color,
				backgroundColor: variant.plain.backgroundColor,
			},
		},

		fullWidth: {
			true: {
				w: "{sizes.full}",
			},
		},

		iconOnly: {
			true: {
				px: "0",
				py: "0",
				w: "auto",
				flexShrink: 0,
				aspectRatio: "1/1",
			},
		},
	},

	defaultVariants: {
		size: "md",
		iconOnly: false,
		fullWidth: false,
		variant: "primary",
	},
});
