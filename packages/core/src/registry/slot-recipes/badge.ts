import { defineSlotRecipe } from "@pandacss/dev";

import { buttonRecipe } from "../recipes/button";

export const badgeRecipe = defineSlotRecipe({
  className: "badge",
  slots: ["root", "indicator"],
  base: {
    root: {
      position: "relative",
      display: "inline-flex",
      boxSize: "max-content",
    },
    indicator: {
      h: "var(--size)",
      fontWeight: "500",
      maxW: "max-content",
      minW: "var(--size)",
      position: "absolute",
      alignItems: "center",
      inset: "var(--inset)",
      display: "inline-flex",
      rounded: "{radii.full}",
      justifyContent: "center",
      fontSize: "var(--font-size)",
      outline: "2px solid {colors.white}",
    },
  },
  variants: {
    size: {
      xs: {
        root: {
          "--font-size": "{fontSizes.10}",
          "--size": "calc({spacing.4} * 2)",
          "--offset": "calc(var(--size) / -2.75)",
        },
      },
      sm: {
        root: {
          "--font-size": "{fontSizes.10}",
          "--size": "calc({spacing.4} * 2.5)",
          "--offset": "calc(var(--size) / -3)",
        },
      },
      md: {
        root: {
          "--font-size": "{fontSizes.10}",
          "--size": "calc({spacing.4} * 4)",
          "--offset": "calc(var(--size) / -3)",
        },
      },
      lg: {
        root: {
          "--font-size": "{fontSizes.10}",
          "--size": "calc({spacing.4} * 4)",
          "--offset": "calc(var(--size) / -3)",
        },
      },
      xl: {
        root: {
          "--font-size": "{fontSizes.12}",
          "--size": "calc({spacing.4} * 5)",
          "--offset": "calc(var(--size) / -3.25)",
        },
      },
    },
    placement: {
      "top-left": {
        root: {
          "--inset": "var(--offset) auto auto var(--offset)",
        },
      },
      "top-right": {
        root: {
          "--inset": "var(--offset) var(--offset) auto auto",
        },
      },
      "bottom-left": {
        root: {
          "--inset": "auto auto var(--offset) var(--offset)",
        },
      },
      "bottom-right": {
        root: {
          "--inset": "auto var(--offset) var(--offset) auto",
        },
      },
    },

    variant: {
      primary: {
        indicator: {
          ...buttonRecipe.variants?.variant?.primary,
        },
      },
      secondary: {
        indicator: {
          ...buttonRecipe.variants?.variant?.secondary,
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
    placement: "bottom-right",
  },
});
