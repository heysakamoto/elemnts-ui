import { defineSlotRecipe } from "@pandacss/dev";

export const sidebarRecipe = defineSlotRecipe({
  className: "sidebar",
  slots: [
    "root",
    "header",
    "addon",
    "nav",
    "list",
    "group",
    "item",
    "trigger",
    "label",
  ],
  base: {
    trigger: {},
    group: {
      display: "flex",
      flexDirection: "column",
    },
  },
});
