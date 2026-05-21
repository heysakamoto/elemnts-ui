import { defineRecipe } from "@pandacss/dev";

export const skeletonRecipe = defineRecipe({
	className: "skeleton",
	base: {
		overflow: "hidden",
		color: "{colors.transparent}",
		rounded: "calc({radii.4} * 6)",
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
				animation: "2s alternate-reverse infinite pulse",
			},
			shimmer: {
				position: "relative",
				bg: "{colors.bg.secondary}",
				_after: {
					content: "''",
					inset: "{spacing.0}",
					position: "absolute",
					translate: "-100% 0%",
					animation: "2s linear infinite shine",
					bg: `linear-gradient(to right in oklab, transparent 0%, color-mix(in oklab, {colors.bg.secondary}, {colors.fg.primary} 6%) 50%, transparent 100%)`,
				},
			},
		},
	},
	defaultVariants: {
		effect: "pulse",
		textOnly: false,
	},
});
