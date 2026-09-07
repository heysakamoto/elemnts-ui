import { defineSlotRecipe } from "@pandacss/dev";
import { titleStyle } from "../constants/styles";

export const tocRecipe = defineSlotRecipe({
  className: "toc",
  slots: [
    "root",
    "content",
    "nav",
    "item",
    "list",
    "title",
    "indicator",
    "link",
  ],
  base: {
    root: {
      display: "flex",
      w: "{sizes.full}",
      position: "relative",
      flexDirection: "row",
      alignItems: "flex-start",

      "@media (max-width:48rem)": {
        flexDirection: "column-reverse",
      },
    },
    list: {
      p: 0,
      m: 0,
      display: "flex",
      listStyle: "none",
      position: "relative",
      flexDirection: "column",
    },
    content: {
      minW: 0,
      w: "{sizes.full}",
      overflowY: "auto",
      scrollBehavior: "smooth",
      overscrollBehavior: "contain",
    },
    nav: {
      top: 0,
      w: "12rem",
      flexShrink: 0,
      display: "flex",
      position: "sticky",
      overflowY: "auto",
      alignSelf: "flex-start",
      flexDirection: "column",
      maxH: "calc(100dvh - 2rem)",
      gap: "calc({spacing.4} * 2)",
    },
    item: {
      paddingInlineStart: 0,
    },
    indicator: {
      left: 0,
      w: "2px",
      top: "var(--top)",
      h: "var(--height)",
      position: "absolute",
      borderRadius: "{radii.full}",
      bgColor: "{colors.colorPalette.primary}",
      transition: `
        top 150ms ease,
        height 150ms ease
      `,
    },
    link: {
      fontSize: "14",
      display: "flex",
      transition: "color 150ms",
      color: "{colors.fg.tertiary}",
      paddingBlock: "calc({spacing.4} * 0.75)",

      _hover: {
        color: "{colors.colorPalette.primary}",
      },

      "&:is(:active, [data-active])": {
        color: "{colors.colorPalette.primary}",
      },

      _focusVisible: {
        outlineOffset: "2px",
        outline: "2px solid {colors.colorPalette.primary}",
      },
    },
    title: {
      ...titleStyle,
      fontSize: "14",
      fontWeight: "400",
      color: "{colors.fg.tertiary}",
    },
  },
});
