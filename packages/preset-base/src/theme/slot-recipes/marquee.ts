import { defineSlotRecipe } from "@pandacss/dev";

export const marqueeRecipe = defineSlotRecipe({
	className: "marquee",
	slots: ["root", "content", "edge", "item", "viewport"],
	base: {
		root: {
			"--marquee-edge-size": "8%",
			"--marquee-edge-color": "{colors.bg.primary}",
			"&[data-paused] [data-part=content]": {
				animationPlayState: "paused",
			},
		},

		content: {
			display: "flex",
			w: "{sizes.full}",
			userSelect: "none",
			minW: "max-content",
			gap: "var(--marquee-spacing)",
			animationFillMode: "forwards",
			animationTimingFunction: "linear",
			animationDelay: "var(--marquee-delay)",
			animationDuration: "var(--marquee-duration)",
			animationIterationCount: "var(--marquee-loop-count)",

			"&[data-reverse]": {
				animationDirection: "reverse",
			},
			"&[data-side='start'], &[data-side='end']": {
				animationName: "marquee-x",
			},
			"&[data-side='top'], &[data-side='bottom']": {
				animationName: "marquee-y",
			},
			_horizontal: {
				flexDirection: "row",
			},
			_vertical: {
				flexDirection: "column",
			},
		},
		viewport: {
			gap: "var(--marquee-spacing)",
		},
		item: {
			minW: "max-content",
		},
		edge: {
			zIndex: "1",
			pointerEvents: "none",
			w: "var(--marquee-edge-size)",

			"&[data-side=start]": {
				bg: "linear-gradient(to right, var(--marquee-edge-color), {colors.transparent})",
				_rtl: {
					bg: "linear-gradient(to left, var(--marquee-edge-color), transparent)",
				},
			},
			"&[data-side=end]": {
				bg: "linear-gradient(to left, var(--marquee-edge-color), {colors.transparent})",
				_rtl: {
					bg: "linear-gradient(to right, var(--marquee-edge-color), transparent)",
				},
			},
			"&[data-side=top]": {
				bg: "linear-gradient(to bottom, var(--marquee-edge-color), {colors.transparent})",
			},
			"&[data-side=bottom]": {
				bg: "linear-gradient(to top, var(--marquee-edge-color), {colors.transparent})",
			},
		},
	},
});
