import { defineSlotRecipe } from "@pandacss/dev";

export const dialogRecipe = defineSlotRecipe({
	className: "dialog",
	slots: [
		"content",
		"trigger",
		"title",
		"description",
		"backdrop",
		"positioner",
		"closeTrigger",
	],
	base: {
		content: {
			w: "{sizes.full}",
			position: "relative",
			transformOrigin: "var(--transform-origin, top)",
			zIndex: "calc(var(--z-index, 9) + var(--layer-index, 0))",

			_open: {
				animation: "scale-fade-in 200ms ease-out",
			},
			_closed: {
				animation: "scale-fade-out 200ms ease-in",
			},
		},
		title: {
			fontWeight: "500",
			fontSize: "{fontSizes.16}",
			color: "{colors.fg.primary}",
		},
		backdrop: {
			w: "100dvw",
			h: "100dvh",
			position: "fixed",
			inset: "{spacing.0}",
			bg: "{colors.white.a50}",
			backdropFilter: "blur(12px)",
			zIndex: "calc(var(--z-index, 9) + var(--layer-index, 0) - 1)",
			_dark: {
				bg: "{colors.black.a50}",
			},
		},
		description: {
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.secondary}",
		},
		positioner: {
			display: "flex",
			position: "fixed",
			inset: "{spacing.0}",
			alignItems: "center",
			boxSize: "{sizes.full}",
			flexDirection: "column",
			p: "calc({spacing.4} * 3)",
			zIndex: "calc(var(--z-index, 9) + var(--layer-index, 0))",
		},
	},

	variants: {
		size: {
			xs: {
				content: {
					maxW: "calc({sizes.4} * 100)",
				},
			},
			sm: {
				content: {
					maxW: "calc({sizes.4} * 120)",
				},
			},
			md: {
				content: {
					maxW: "calc({sizes.4} * 140)",
				},
			},
			lg: {
				content: {
					maxW: "calc({sizes.4} * 140)",
				},
			},
			xl: {
				content: {
					maxW: "calc({sizes.4} * 160)",
				},
			},
			cover: {
				content: {
					h: "{sizes.full}",
					maxW: "{sizes.full}",
				},
			},
			full: {
				positioner: {
					p: "calc({spacing.4} * 0)",
				},
				content: {
					h: "{sizes.full}",
					maxW: "{sizes.full}",
					rounded: "{radii.0}",
				},
			},
		},
		placement: {
			top: {
				positioner: {
					justifyContent: "start",
				},
			},
			center: {
				positioner: {
					justifyContent: "center",
				},
			},
			bottom: {
				positioner: {
					justifyContent: "end",
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		placement: "center",
	},
});
