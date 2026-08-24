import { defineRecipe } from "@pandacss/dev";

import { buttonRecipe } from "./button";
import { variant } from "../constants/variant";

export const chipRecipe = defineRecipe({
  className: "chip",
  base: {
    w: "{sizes.fit}",
    fontWeight: "500",
    gap: "{spacing.4}",
    alignItems: "center",
    rounded: "{radii.16}",
    display: "inline-flex",
    cornerShape: "squircle",
    justifyContent: "center",
    border: `1px solid transparent`,

    _focusVisible: {
      outlineOffset: "-1px",
      outline: "2px solid {colors.accent.primary}",
    },
  },
  variants: {
    size: {
      "2xs": {
        ...buttonRecipe.variants?.size?.["2xs"],
      },
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
        color: variant.primary.color,
        backgroundColor: variant.primary.backgroundColor,
      },
      secondary: {
        color: variant.secondary.color,
        backgroundColor: variant.secondary.backgroundColor,
      },
      tertiary: {
        color: variant.tertiary.color,
        border: variant.tertiary.border,
        backgroundColor: variant.tertiary.backgroundColor,
      },
      ghost: {
        color: variant.ghost.color,
        backgroundColor: variant.ghost.backgroundColor,
      },
      surface: {
        color: variant.surface.color,
        border: variant.surface.border,
        backgroundColor: variant.surface.backgroundColor,
      },
    },

    iconOnly: {
      true: {
        px: "0",
        py: "0",
        w: "auto",
        aspectRatio: "1/1",
      },
    },
  },

  defaultVariants: {
    size: "md",
    iconOnly: false,
    variant: "primary",
  },
});
