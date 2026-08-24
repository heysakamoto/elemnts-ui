import { defineRecipe } from "@pandacss/dev";

export const swatchRecipe = defineRecipe({
  className: "color-swatch",

  base: {
    position: "relative",
    alignItems: "center",
    rounded: "{radii.16}",
    display: "inline-flex",
    cornerShape: "squircle",
    justifyContent: "center",
    border: "1px solid {colors.stroke.secondary}",
  },

  variants: {
    size: {
      xs: {
        boxSize: "calc({sizes.4} * 6)",
      },
      sm: {
        boxSize: "calc({sizes.4} * 7)",
      },
      md: {
        boxSize: "calc({sizes.4} * 8)",
      },
      lg: {
        boxSize: "calc({sizes.4} * 9)",
      },
      xl: {
        boxSize: "calc({sizes.4} * 10)",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
