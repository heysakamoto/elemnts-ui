import { defineRecipe } from "@pandacss/dev";

import { size } from "../constants/size";
import { variant } from "../constants/variant";

export const buttonRecipe = defineRecipe({
  className: "btn",
  base: {
    w: "fit-content",
    userSelect: "none",
    position: "relative",
    alignItems: "center",
    display: "inline-flex",
    cornerShape: "squircle",
    justifyContent: "center",
    transformOrigin: "center",
    gap: "calc({spacing.4} * 2)",
    rounded: "calc({radii.4} * 4)",
    border: "0px solid transparent",
    transition: `
      color 100ms ease-in,
      background-color 100ms ease-in
    `,

    _focusVisible: {
      outlineOffset: "-1px",
      outline: "2px solid {colors.accent.primary}",
    },

    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      pointerEvents: "none",
    },
  },

  variants: {
    size: {
      "2xs": {
        height: size["2xs"].height,
        fontSize: size["2xs"].fontSize,
        lineHeight: size["2xs"].lineHeight,
        paddingInline: size["2xs"].paddingInline,
      },
      xs: {
        height: size.xs.height,
        fontSize: size.xs.fontSize,
        lineHeight: size.xs.lineHeight,
        paddingInline: size.xs.paddingInline,
      },
      sm: {
        fontSize: size.sm.fontSize,
        lineHeight: size.sm.lineHeight,
        height: size.sm.height,
        paddingInline: size.sm.paddingInline,
      },
      md: {
        height: size.md.height,
        fontSize: size.md.fontSize,
        lineHeight: size.md.lineHeight,
        paddingInline: size.md.paddingInline,
      },
      lg: {
        height: size.lg.height,
        fontSize: size.lg.fontSize,
        lineHeight: size.lg.lineHeight,
        paddingInline: size.lg.paddingInline,
      },
      xl: {
        height: size.xl.height,
        fontSize: size.xl.fontSize,
        lineHeight: size.xl.lineHeight,
        paddingInline: size.xl.paddingInline,
      },
    },

    variant: {
      primary: {
        color: variant.primary.color,
        backgroundColor: variant.primary.backgroundColor,

        _hover: variant.primary._hover,
        _active: variant.primary._active,
      },
      secondary: {
        color: variant.secondary.color,
        backgroundColor: variant.secondary.backgroundColor,

        _hover: variant.secondary._hover,
        _active: variant.secondary._active,
      },
      tertiary: {
        color: variant.tertiary.color,
        border: variant.tertiary.border,
        backgroundColor: variant.tertiary.backgroundColor,

        _hover: variant.tertiary._hover,
        _active: variant.tertiary._active,
      },
      ghost: {
        color: variant.ghost.color,
        backgroundColor: variant.ghost.backgroundColor,

        _hover: variant.ghost._hover,
        _active: variant.ghost._active,
      },
      surface: {
        color: variant.surface.color,
        border: variant.surface.border,
        backgroundColor: variant.surface.backgroundColor,

        _hover: variant.surface._hover,
        _active: variant.surface._active,
      },
      plain: {
        color: variant.plain.color,
        backgroundColor: variant.plain.backgroundColor,
      },
    },

    fullWidth: {
      true: {
        flexShrink: 1,
        w: "{sizes.full}",
      },
    },

    iconOnly: {
      true: {
        px: "0",
        py: "0",
        w: "auto",
        flexShrink: 0,
        aspectRatio: "1/1",
      },
    },
  },

  defaultVariants: {
    size: "md",
    iconOnly: false,
    fullWidth: false,
    variant: "primary",
  },
});
