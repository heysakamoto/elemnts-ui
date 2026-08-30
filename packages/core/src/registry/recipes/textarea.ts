import { defineRecipe } from "@pandacss/dev";
import { size } from "../constants/size";
import { inputRecipe } from "./input";

export const textareaRecipe = defineRecipe({
	className: "textarea",
	base: {
		...inputRecipe.base,
	},
	variants: {
		size: {
			xs: {
				py: size.xs.paddingBlock,
				px: size.xs.paddingInline,
				fontSize: size.xs.fontSize,
				lineHeight: size.xs.lineHeight,
			},
			sm: {
				py: size.sm.paddingBlock,
				px: size.sm.paddingInline,
				fontSize: size.sm.fontSize,
				lineHeight: size.sm.lineHeight,
			},
			md: {
				py: size.md.paddingBlock,
				px: size.md.paddingInline,
				fontSize: size.md.fontSize,
				lineHeight: size.md.lineHeight,
			},
			lg: {
				py: size.lg.paddingBlock,
				px: size.lg.paddingInline,
				fontSize: size.lg.fontSize,
				lineHeight: size.lg.lineHeight,
			},
			xl: {
				py: size.xl.paddingBlock,
				px: size.xl.paddingInline,
				fontSize: size.xl.fontSize,
				lineHeight: size.xl.lineHeight,
			},
		},
		variant: {
			primary: {
				...inputRecipe.variants?.variant?.primary,
			},
			secondary: {
				...inputRecipe.variants?.variant?.secondary,
			},
			tertiary: {
				...inputRecipe.variants?.variant?.tertiary,
			},
		},
	},

	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
