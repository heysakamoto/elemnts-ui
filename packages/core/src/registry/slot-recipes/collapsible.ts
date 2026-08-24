import { defineSlotRecipe } from "@pandacss/dev";

export const collapsibleRecipe = defineSlotRecipe({
  className: "collapsible",
  slots: ["root", "trigger", "indicator", "content"],
  base: {
    root: {
      "--collapsible-bg":
        "color-mix(in oklab, {colors.neutral.secondary} 50%, transparent)",

      display: "flex",
      overflow: "clip",
      w: "{sizes.full}",
      cornerShape: "squircle",
      flexDirection: "column",
      rounded: "calc({radii.4} * 4)",

      _open: {
        bgColor: "var(--collapsible-bg)",
      },

      "&:has([data-has-collapsed-size])": {
        bgColor: "var(--collapsible-bg)",
      },
    },
    trigger: {
      display: "flex",
      w: "{sizes.full}",
      gap: "{spacing.4}",
      transition: "none",
      lineHeight: "18px",
      alignItems: "center",
      cornerShape: "squircle",
      fontSize: "{fontSizes.14}",
      py: "calc({spacing.4} * 2)",
      px: "calc({spacing.4} * 3)",
      color: "{colors.fg.primary}",
      rounded: "calc({radii.4} * 4)",
      justifyContent: "space-between",

      _disabled: {
        opacity: 0.5,
        cursor: "not-allowed",
      },

      "&:not(:disabled, [data-disabled]):hover": {
        bgColor: "{colors.neutral.secondary}",
        "& svg": {
          color: "inherit",
        },
      },
    },
    indicator: {
      "& > svg": {
        transformOrigin: "center",
        transition: "rotate 200ms",
        color: "{colors.icon.secondary}",
      },

      _open: {
        "& > svg": {
          rotate: "180deg",
        },
      },
    },
    content: {
      overflow: "clip",
      fontSize: "{fontSizes.14}",

      _open: {
        animationDuration: "250ms",
        animationName: "expand-height, fade",
        animationTimingFunction: "ease-out, ease-out",
        "&[data-has-collapsed-size]": {
          animationName: "expand-height",
        },
      },
      _closed: {
        animationDuration: "250ms",
        animationName: "collapse-height, fade-out",
        animationTimingFunction: "ease-in, ease-in",
        "&[data-has-collapsed-size]": {
          animationName: "collapse-height",
        },
      },
    },
  },
});
