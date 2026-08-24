import { defineSlotRecipe } from "@pandacss/dev";

export const datePickerRecipe = defineSlotRecipe({
  className: "date-picker",
  slots: [
    "root",
    "trigger",
    "content",
    "control",
    "label",
    "positioner",
    "input",
    "clearTrigger",
    "table",
    "nextTrigger",
    "prevTrigger",
    "view",
    "monthSelect",
    "rangeText",
    "tableBody",
    "tableCell",
    "tableCellTrigger",
    "tableHead",
    "tableHeader",
    "tableRow",
    "viewTrigger",
    "viewControl",
    "yearSelect",
    "presetTrigger",
  ],
  base: {
    root: {
      "&:is([data-readonly])": {
        pointerEvents: "none",
      },
      _disabled: {
        opacity: "0.5",
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },
    control: {
      display: "flex",
    },
    content: {
      "--cell-radius": "calc({radii.4} * 4)",

      position: "relative",
      transformOrigin: "var(--transform-origin, top)",
      zIndex: "calc(var(--z-index, 9) + var(--layer-index, 0))",

      _open: {
        animation: "scale-fade-in 200ms ease-out",
      },
      _closed: {
        animation: "scale-fade-out 200ms ease-in",
      },
    },
    label: {},
    table: {
      display: "flex",
      w: "{sizes.full}",
      borderSpacing: "0",
      gap: "{spacing.12}",
      flexDirection: "column",
      borderCollapse: "separate",
    },
    tableHeader: {
      flex: "1",
      fontWeight: "400",
      userSelect: "none",
      justifyContent: "center",
      fontSize: "{fontSizes.13}",
      color: "{colors.fg.tertiary}",
    },
    tableBody: {
      display: "flex",
      w: "{sizes.full}",
      gap: "{spacing.4}",
      flexDirection: "column",
    },
    tableRow: {
      display: "flex",
      w: "{sizes.full}",

      "&:is([data-view=day])": {
        gridTemplateColumns: "repeat(7, 1fr)",
      },
      "&:is([data-view=month])": {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
      "&:is([data-view=year])": {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
    },
    tableCell: {
      aspectRatio: "1 / 1",
      boxSize: "{sizes.full}",
    },
    tableCellTrigger: {
      h: "auto",
      w: "{sizes.full}",
      cursor: "pointer",
      alignItems: "center",
      aspectRatio: "1 / 1",
      display: "inline-flex",
      cornerShape: "squircle",
      justifyContent: "center",
      fontSize: "{fontSizes.14}",
      minW: "calc({sizes.4} * 7)",
      color: "{colors.fg.primary}",
      rounded: "var(--cell-radius)",
      lineHeight: "{lineHeights.none}",

      "&:not([data-selected], :disabled, [data-in-range]):is([data-today])": {
        fontWeight: "500",
      },

      "&:not([data-selected], :disabled, [data-in-range], [data-disabled])": {
        _hover: {
          color: "{colors.colorPalette.tertiary}",
          bgColor: "{colors.colorPalette.primary}",
        },
      },

      "&:not([data-range-start], [data-range-end]):is([data-selected])": {
        color: "{colors.colorPalette.tertiary}",
        bgColor: "{colors.colorPalette.primary}",
      },

      "&:is([data-range-start], [data-range-end])": {
        color: "{colors.colorPalette.tertiary}",
        bgColor: "{colors.colorPalette.primary}",
      },

      "&:is([data-in-range])": {
        rounded: "{radii.0}",
        color: "{colors.colorPalette.primary}",
        bgColor: "{colors.colorPalette.secondary}",
      },

      "&:is([data-range-start])": {
        color: "{colors.colorPalette.tertiary}",
        bgColor: "{colors.colorPalette.primary}",
        borderTopLeftRadius: "var(--cell-radius)",
        borderBottomLeftRadius: "var(--cell-radius)",
      },
      "&:is([data-range-end])": {
        color: "{colors.colorPalette.tertiary}",
        bgColor: "{colors.colorPalette.primary}",
        borderTopRightRadius: "var(--cell-radius)",
        borderBottomRightRadius: "var(--cell-radius)",
      },
      "&:is([data-outside-range], [data-unavailable])": {
        opacity: "0.8",
        color: "{colors.fg.tertiary}",
      },
      "&:is([data-unavailable])": {
        textDecoration: "line-through",
      },
    },
    positioner: {
      zIndex: "{zIndex.overlay}",
      w: "var(--reference-width)",
    },
    rangeText: {
      flexGrow: "1",
      fontWeight: "500",
      textAlign: "start",
      fontSize: "{fontSizes.14}",
      color: "{colors.fg.primary}",
    },
    viewControl: {
      w: "{sizes.full}",
      alignItems: "center",
      display: "inline-flex",
    },
  },
});
