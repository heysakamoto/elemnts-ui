import { defineSlotRecipe } from "@pandacss/dev";

import { buttonRecipe } from "../recipes/button";

export const avatarRecipe = defineSlotRecipe({
  className: "avatar",
  slots: ["root", "image", "fallback"],
  base: {
    root: {
      flexShrink: 0,
      rounded: "16px",
      overflow: "hidden",
      alignItems: "center",
      boxSize: "var(--size)",
      display: "inline-flex",
      cornerShape: "squircle",
      justifyContent: "center",
    },
    image: {
      objectFit: "cover",
      objectPosition: "center",
      boxSize: "{sizes.full}",
    },
    fallback: {
      color: "inherit",
      alignItems: "center",
      display: "inline-flex",
      boxSize: "{sizes.full}",
      justifyContent: "center",
      fontSize: "{fontSizes.14}",
      backgroundColor: "inherit",
      lineHeight: "{lineHeights.none}",
    },
  },

  variants: {
    size: {
      "2xs": {
        root: {
          "--size": "calc({sizes.4} * 5)",
        },
      },
      xs: {
        root: {
          "--size": "calc({sizes.4} * 6)",
        },
      },
      sm: {
        root: {
          "--size": "calc({sizes.4} * 7)",
        },
      },
      md: {
        root: {
          "--size": "calc({sizes.4} * 8)",
        },
      },
      lg: {
        root: {
          "--size": "calc({sizes.4} * 9)",
        },
      },
      xl: {
        root: {
          "--size": "calc({sizes.4} * 10)",
        },
      },
      "2xl": {
        root: {
          "--size": "calc({sizes.4} * 12)",
        },
      },
    },
    variant: {
      primary: {
        root: {
          ...buttonRecipe.variants?.variant?.primary,
        },
      },
      secondary: {
        root: {
          ...buttonRecipe.variants?.variant?.secondary,
        },
      },
      tertiary: {
        root: {
          ...buttonRecipe.variants?.variant?.tertiary,
        },
      },
      ghost: {
        root: {
          ...buttonRecipe.variants?.variant?.ghost,
        },
      },
      surface: {
        root: {
          ...buttonRecipe?.variants?.variant?.surface,
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});
