import { defineRecipe } from "@pandacss/dev";

export const scrollShadowRecipe = defineRecipe({
	className: "scroll-shadow",
	base: {
		"--scroll-shadow-end-color": "{colors.bg.primary}",
		"--scroll-shadow-start-color": "{colors.transparent}",

		w: "{sizes.full}",
		overflow: "auto",
	},
	variants: {
		hideScrollbar: {
			true: {
				scrollbar: "hidden",
			},
		},
		isEnabled: {
			true: {
				"&[data-overflow-y]:not([data-at-top])": {
					maskImage:
						"linear-gradient(180deg, var(--scroll-shadow-start-color), var(--scroll-shadow-end-color) var(--scroll-shadow-size))",
				},
				"&[data-overflow-y]:not([data-at-bottom])": {
					maskImage:
						"linear-gradient(0deg, var(--scroll-shadow-start-color), var(--scroll-shadow-end-color) var(--scroll-shadow-size))",
				},
				"&[data-overflow-y]:not([data-at-top]):not([data-at-bottom])": {
					maskImage:
						"linear-gradient(180deg, var(--scroll-shadow-start-color), var(--scroll-shadow-end-color) var(--scroll-shadow-size), var(--scroll-shadow-end-color) calc(100% - var(--scroll-shadow-size)), var(--scroll-shadow-start-color))",
				},

				"&[data-overflow-x]:not([data-at-left])": {
					maskImage:
						"linear-gradient(90deg, var(--scroll-shadow-start-color), var(--scroll-shadow-end-color) var(--scroll-shadow-size))",
				},

				"&[data-overflow-x]:not([data-at-right])": {
					maskImage:
						"linear-gradient(270deg, var(--scroll-shadow-start-color), var(--scroll-shadow-end-color) var(--scroll-shadow-size))",
				},

				"&[data-overflow-x]:not([data-at-left]):not([data-at-right])": {
					maskImage:
						"linear-gradient(90deg, var(--scroll-shadow-start-color), var(--scroll-shadow-end-color) var(--scroll-shadow-size), var(--scroll-shadow-end-color) calc(100% - var(--scroll-shadow-size)), var(--scroll-shadow-start-color))",
				},

				"&[data-overflow-x][data-overflow-y]": {
					maskComposite: "intersect",
					WebkitMaskComposite: "source-in",
				},
			},
		},
	},
	defaultVariants: {
		isEnabled: true,
		hideScrollbar: true,
	},
});
