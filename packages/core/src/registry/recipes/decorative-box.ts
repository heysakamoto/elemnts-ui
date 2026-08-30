import { defineRecipe } from "@pandacss/dev";

export const decorativeBoxRecipe = defineRecipe({
	className: "decorative-box",
	base: {
		display: "flex",
		alignItems: "center",
		rounded: "{radii.16}",
		cornerShape: "squircle",
		boxSize: "{sizes.full}",
		flexDirection: "column",
		justifyContent: "center",
	},
	variants: {
		variant: {
			secondary: {
				bgColor: "{colors.bg.tertiary}",
				outline: "1px dashed {colors.stroke.primary}",
			},
			primary: {
				backgroundClip: "padding-box",
				border: "1px solid {colors.stroke.secondary}",
				bgColor:
					"color-mix(in oklab, 20% {colors.bg.tertiary}, 80% {colors.transparent})",
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
			},
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});
