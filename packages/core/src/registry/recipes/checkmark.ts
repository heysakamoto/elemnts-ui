import { defineRecipe } from "@pandacss/dev";

import { variant } from "../constants/variant";

export const checkmarkRecipe = defineRecipe({
  className: "checkmark",
  base: {
    flexShrink: "0",
    overflow: "clip",
    cursor: "pointer",
    position: "relative",
    alignItems: "center",
    display: "inline-flex",
    cornerShape: "squircle",
    justifyContent: "center",
    color: "{colors.transparent}",
    rounded: "calc({radii.4} * 4)",
    transition: `
    color 100ms,
    border-color 50ms,
    backgroud-color 100ms`,

    "& > svg": {
      zIndex: "1",
      color: "inherit",
    },

    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },

  variants: {
    size: {
      xs: { boxSize: "calc({sizes.4} * 3)" },
      sm: { boxSize: "calc({sizes.4} * 4)" },
      md: { boxSize: "calc({sizes.4} * 5)" },
      lg: { boxSize: "calc({sizes.4} * 6)" },
      xl: { boxSize: "calc({sizes.4} * 7)" },
    },

    variant: {
      primary: {
        border: variant.tertiary.border,
        bgColor: variant.tertiary.backgroundColor,
        "&[data-state='checked'], &[data-state='indeterminate']": {
          color: variant.primary.color,
          bgColor: variant.primary.backgroundColor,
          borderColor: variant.primary.backgroundColor,
        },
      },
      secondary: {
        bgColor: variant.tertiary.backgroundColor,
        border: `1px solid ${variant.primary.backgroundColor}`,
        "&[data-state='checked'], &[data-state='indeterminate']": {
          color: variant.tertiary.color,
        },
      },
      tertiary: {
        bgColor: variant.secondary.backgroundColor,
        "&[data-state='checked'], &[data-state='indeterminate']": {
          color: variant.tertiary.color,
        },
      },
      ghost: {
        bgColor: variant.tertiary.backgroundColor,
        "&[data-state='checked'], &[data-state='indeterminate']": {
          color: variant.tertiary.color,
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});
