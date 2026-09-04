import { defineRecipe } from "@pandacss/dev";
import { variant } from "../constants/variant";
import { buttonRecipe } from "./button";

const selected =
	"&:not(:disabled, [data-disabled], [aria-disabled=true]):is([data-selected], [data-state=checked], [aria-checked=true], [data-highlighted], [data-state=on])";

const hover = "&:not(:disabled, [data-disabled], [aria-disabled=true]):hover";

export const itemRecipe = defineRecipe({
	className: "item",

	base: {
		w: "{sizes.full}",
		cursor: "pointer",
		gap: "{spacing.8}",
		position: "relative",
		alignItems: "center",
		display: "inline-flex",
		justifyContent: "start",
		color: "{colors.fg.primary}",
		bgColor: "{colors.transparent}",
		border: "1px solid transparent",

		_focusVisible: {
			outlineOffset: "-1px",
			outline: "2px solid {colors.accent.primary}",
		},

		"& > svg": {
			color: "{colors.icon.secondary}",
		},

		[selected]: {
			"& > svg": {
				color: "inherit",
			},
		},

		_disabled: {
			opacity: 0.5,
			cursor: "not-allowed",
		},
	},

	variants: {
		size: {
			xs: {
				...buttonRecipe.variants?.size?.xs,
			},
			sm: {
				...buttonRecipe.variants?.size?.sm,
			},
			md: {
				...buttonRecipe.variants?.size?.md,
			},
			lg: {
				...buttonRecipe.variants?.size?.lg,
			},
			xl: {
				...buttonRecipe.variants?.size?.xl,
			},
		},

		variant: {
			primary: {
				[hover]: {
					color: variant.primary.color,
					bgColor: variant.primary._hover.backgroundColor,
				},
				[selected]: {
					color: variant.primary.color,
					bgColor: variant.primary._selected.backgroundColor,

					"& > *": {
						color: "{colors.current}",
					},
				},
			},

			secondary: {
				[hover]: {
					color: variant.secondary.color,
					bgColor: variant.secondary._hover.backgroundColor,
				},
				[selected]: {
					color: variant.secondary.color,
					bgColor: variant.secondary._selected.backgroundColor,

					"& > svg": {
						color: "{colors.current}",
					},
				},
			},

			tertiary: {
				[hover]: {
					color: variant.tertiary.color,
					borderColor: variant.tertiary.borderColor,
					bgColor: variant.tertiary._hover.backgroundColor,
				},
				[selected]: {
					color: variant.tertiary.color,
					borderColor: variant.tertiary.borderColor,
					bgColor: variant.tertiary.backgroundColor,

					"& > svg": {
						color: "{colors.current}",
					},
				},
			},

			surface: {
				[hover]: {
					color: variant.surface.color,
					bgColor: variant.surface._hover.backgroundColor,
				},
				[selected]: {
					color: variant.surface.color,
					borderColor: variant.surface.borderColor,
					bgColor: variant.surface._selected.backgroundColor,

					"& > svg": {
						color: "{colors.current}",
					},
				},
			},
		},

		iconOnly: {
			true: {
				aspectRatio: "1/1",
				justifyContent: "center",
				px: "calc({spacing.4} * 0)",
			},
		},
	},

	defaultVariants: {
		size: "md",
		iconOnly: false,
		variant: "primary",
	},
});
