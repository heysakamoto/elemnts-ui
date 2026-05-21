import { defineSlotRecipe } from "@pandacss/dev";

export const swapRecipe = defineSlotRecipe({
	className: "swap",
	slots: ["root", "indicator"],
	base: {},
	variants: {
		mode: {
			fade: {
				indicator: {
					_open: {
						animationName: "fade-in",
						animationDuration: "200ms",
						animationTimingFunction: "ease-out",
					},

					_closed: {
						animationName: "fade-out",
						animationDuration: "100ms",
						animationTimingFunction: "ease-in",
					},
				},
			},

			flip: {
				indicator: {
					backfaceVisibility: "hidden",

					_open: {
						animationName: "flip-in",
						animationDuration: "400ms",
						animationtimingFunction: "ease",
					},
					_closed: {
						animationName: "flip-out",
						animationDuration: "200ms",
						animationtimingFunction: "ease",
					},
				},
			},

			scale: {
				indicator: {
					_open: {
						animationName: "scale-in, fade-in",
						animationDuration: "200ms",
						animationTimingFunction: "ease-out",
					},
					_closed: {
						animationName: "scale-out, fade-out",
						animationDuration: "100ms",
						animationTimingFunction: "ease-in",
					},
				},
			},
			rotate: {
				indicator: {
					_open: {
						animationName: "rotate-in, fade-in",
						animationDuration: "250ms",
						animationTimingFunction: "ease-out",
					},
					_closed: {
						animationName: "rotate-out, fade-out",
						animationDuration: "100ms",
						animationTimingFunction: "ease-in",
					},
				},
			},
		},
	},
	defaultVariants: {},
});
