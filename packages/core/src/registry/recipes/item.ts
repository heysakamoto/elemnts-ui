import { defineRecipe } from "@pandacss/dev";

import { buttonRecipe } from "./button";

export const itemRecipe = defineRecipe({
  className: "item",
  base: {
    rounded: "16px",
    w: "{sizes.full}",
    cursor: "pointer",
    gap: "{spacing.8}",
    position: "relative",
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "start",
    cornerShape: "squircle",
    color: "{colors.fg.primary}",
    bgColor: "{colors.transparent}",
    border: "1px solid transparent",

    _focusVisible: {
      outlineOffset: "-1px",
      outline: "2px solid {colors.accent.primary}",
    },

    "& > svg": {
      color: "{colors.icon.secondary}",
    },

    "&:is([data-selected], [aria-selected=true], :hover, [data-highlighted])": {
      "& > svg": {
        color: "inherit",
      },
    },

    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },

  variants: {
    size: {
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
        "&:is([data-selected], [aria-selected=true], :hover, [data-highlighted])":
          {
            bgColor: "{colors.colorPalette.primary}",
            color: "{colors.colorPalette.tertiary}",
          },
      },
      secondary: {
        "&:is([data-selected], [aria-selected=true], :hover, [data-highlighted])":
          {
            bgColor: "{colors.colorPalette.secondary}",
            color: "{colors.colorPalette.primary}",
          },
      },
      tertiary: {
        "&:is([data-selected], [aria-selected=true], :hover, [data-highlighted])":
          {
            bgColor: "{colors.transparent}",
            color: "{colors.colorPalette.primary}",
          },
      },
      surface: {
        "&:is([data-selected], [aria-selected=true], :hover, [data-highlighted])":
          {
            color: "{colors.colorPalette.primary}",
            bgColor: "{colors.colorPalette.secondary}",
            border: "1px solid {colors.colorPalette.stroke}",
          },
      },
    },

    iconOnly: {
      true: {
        justifyContent: "center",
        px: "calc({spacing.4} * 0)",
        py: "calc({spacing.4} * 0)",
        boxSize: "calc({sizes.4} * 7)",
      },
    },
  },

  defaultVariants: {
    size: "md",
    iconOnly: false,
    variant: "primary",
  },
});

