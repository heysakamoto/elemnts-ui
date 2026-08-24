import { defineRecipe } from "@pandacss/dev";

import { chipRecipe } from "./chip";

const { base, variants, defaultVariants } = chipRecipe;

export const kbdRecipe = defineRecipe({
  className: "kbd",
  base,
  variants,
  defaultVariants,
});
