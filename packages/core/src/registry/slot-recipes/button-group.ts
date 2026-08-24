import { defineSlotRecipe } from "@pandacss/dev";

import { groupRecipe } from "../recipes/group";

export const buttonGroupRecipe = defineSlotRecipe({
  className: "btn-group",
  slots: ["root", "separator"],
  description: "A container for grouping related buttons",

  base: {
    root: {
      ...groupRecipe?.base,
    },
    separator: {
      zIndex: 1,
      opacity: 0.2,
      position: "absolute",
      display: "inline-block",
      bgColor: "{colors.current}",
      rounded: "calc({radii.4} * 99)",
    },
  },

  variants: {
    fullWidth: {
      true: {
        root: {
          ...groupRecipe?.variants?.fullWidth?.true,
        },
      },
    },

    attached: {
      true: {
        root: {
          ...groupRecipe?.variants?.attached?.true,
        },
      },
      false: {
        root: {
          ...groupRecipe?.variants?.attached?.false,
        },
      },
    },

    orientation: {
      horizontal: {
        root: {
          flexDirection: "row",
        },
        separator: {
          w: 1,
          h: "50%",
          inset: "auto 0px auto auto",
        },
      },
      vertical: {
        root: {
          flexDirection: "column",
        },
        separator: {
          w: "50%",
          h: 1,
          inset: "auto auto 0px auto",
        },
      },
    },
  },

  compoundVariants: [
    {
      attached: true,
      orientation: "horizontal",
      css: {
        root: {
          ...groupRecipe?.compoundVariants?.[0]?.css,
        },
      },
    },

    {
      attached: true,
      orientation: "vertical",
      css: {
        root: {
          ...groupRecipe?.compoundVariants?.[1]?.css,
        },
      },
    },
  ],

  defaultVariants: {
    fullWidth: false,
    attached: false,
    orientation: "horizontal",
  },
});
