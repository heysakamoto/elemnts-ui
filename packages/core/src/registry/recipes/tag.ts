import { defineRecipe } from "@pandacss/dev";

import { itemRecipe } from "./item";

const { base, variants, defaultVariants } = itemRecipe;

export const tagRecipe = defineRecipe({
  className: "tag",
  base: {
    ...base,
    width: "fit-content",
  },

  variants,

  defaultVariants,
});
