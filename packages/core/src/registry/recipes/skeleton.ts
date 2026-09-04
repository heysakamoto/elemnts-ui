import { defineRecipe } from "@pandacss/dev";

export const skeletonRecipe = defineRecipe({
	className: "skeleton",
	base: {
		flexShrink: 0,
		overflow: "hidden",
		userSelect: "none",
		position: "relative",
		color: "{colors.transparent}",
		bgColor: "{colors.surface.8}",
		rounded: "calc({radii.4} * 4)",
	},
	variants: {
		textOnly: {
			true: {
				w: "{sizes.fit}",
				display: "inline",
				boxDecorationBreak: "clone",
			},
		},
		effect: {
			pulse: {
				animation: "pulse 2s infinite",
			},
			shimmer: {
				position: "relative",
				transform: "translateZ(0)",

				_after: {
					inset: 0,
					content: "''",
					position: "absolute",
					transform: "translateX(-100%)",
					animation: "shimmer 2s infinite",
					backgroundImage: `linear-gradient(
            90deg,
            color-mix(in oklab, {colors.surface.1} 0%, {colors.transparent}) 0%,
            color-mix(in oklab, {colors.surface.1} 50%, {colors.transparent}) 50%,
            color-mix(in oklab, {colors.surface.1} 0%, {colors.transparent}) 100%
          )`,
				},
			},
		},
	},
	defaultVariants: {
		effect: "pulse",
		textOnly: false,
	},
});
