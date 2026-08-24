import { defineRecipe } from "@pandacss/dev";

export const aspectRatioRecipe = defineRecipe({
  className: "aspect-ratio",
  base: {
    overflow: "clip",
    aspectRatio: "16/9",
    position: "relative",
    cornerShape: "squircle",
    boxSize: "{sizes.auto}",
    rounded: "calc({radii.4} * 4)",

    "& > *": {
      inset: "0",
      overflow: "clip",
      display: "flex",
      alignItems: "center",
      position: "absolute",
      boxSize: "{sizes.full}",
      justifyContent: "center",
    },

    "& > img, & > video": {
      objectFit: "cover",
    },
  },
  variants: {},
  defaultVariants: {},
});
