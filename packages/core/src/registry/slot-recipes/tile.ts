import { defineSlotRecipe } from "@pandacss/dev";

import { size } from "../constants/size";
import { itemRecipe } from "../recipes/item";

export const tileRecipe = defineSlotRecipe({
  className: "tile",
  slots: [
    "root",
    "content",
    "control",
    "addon",
    "title",
    "description",
    "indicator",
  ],
  base: {
    root: {
      ...itemRecipe.base,
      alignItems: "start",

      _hover: {
        "& *": {
          color: "currentColor",
        },
      },

      _selected: {
        "& *": {
          color: "currentColor",
        },
      },
    },
    indicator: {
      boxSize: "fit",
      color: "inherit",
    },
    control: {
      boxSize: "fit",
    },
    content: {
      display: "flex",
      w: "{sizes.full}",
      flexDirection: "column",
      gap: "calc({spacing.4} * 2)",
    },
    title: {
      flexGrow: 1,
      color: "inherit",
      fontWeight: "500",
      alignItems: "center",
      display: "inline-flex",
      justifyContent: "start",
      fontSize: "{fontSizes.14}",
      gap: "calc({spacing.4} * 1)",
      lineHeight: "{lineHeights.none}",

      "& > svg": {
        color: "{colors.icon.secondary}",
      },
    },
    description: {
      textAlign: "start",
      fontSize: "{fontSizes.14}",
      color: "{colors.fg.secondary}",
    },
  },

  variants: {
    orientation: {
      horizontal: {
        root: {
          flexDirection: "row",
        },
      },
      vertical: {
        root: {
          flexDirection: "column",
        },
      },
    },
    size: {
      xs: {
        root: {
          py: size.xs.paddingBlock,
          px: size.xs.paddingInline,
        },
      },
      sm: {
        root: {
          py: size.sm.paddingBlock,
          px: size.sm.paddingInline,
        },
      },
      md: {
        root: {
          py: size.md.paddingBlock,
          px: size.md.paddingInline,
        },
      },
      lg: {
        root: {
          py: size.lg.paddingBlock,
          px: size.lg.paddingInline,
        },
      },
      xl: {
        root: {
          py: size.xl.paddingBlock,
          px: size.xl.paddingInline,
        },
      },
    },

    variant: {
      primary: {
        root: {
          ...itemRecipe.variants?.variant?.primary,
        },
      },
      secondary: {
        root: {
          ...itemRecipe.variants?.variant?.secondary,
        },
      },
      tertiary: {
        root: {
          ...itemRecipe.variants?.variant?.tertiary,
        },
      },
      surface: {
        root: {
          ...itemRecipe.variants?.variant?.surface,
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "primary",
    orientation: "horizontal",
  },
});
