import { defineRecipe } from "@pandacss/dev";

import { chipRecipe } from "./chip";

const { base, variants, defaultVariants } = chipRecipe;

export const codeRecipe = defineRecipe({
  className: "code",
  base: {
    ...base,
    fontFamily: "mono",
    justifyContent: "start",
  },
  variants,
  defaultVariants,
});
