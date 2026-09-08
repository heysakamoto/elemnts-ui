import { defineSlotRecipe } from "@pandacss/dev";
import {
  contentStyle,
  linkStyle,
  popoverStyle,
  positionerStyle,
} from "../constants/styles";

export const navigationMenuRecipe = defineSlotRecipe({
	className: "navigation-menu",
	slots: [
		"root",
		"list",
		"item",
		"trigger",
		"link",
		"arrow",
		"indicator",
		"itemIndicator",
		"viewport",
		"viewportPositioner",
		"content",
	],
  base: {
    root: {
      gap: 16,
      display: "flex",
      position: "relative",
      width: "{sizes.full}",
      flexDirection: "column",
    },
    list: {
      gap: 4,
      display: "flex",
      listStyle: "none",
      position: "relative",
      flexDirection: "row",

      _vertical: {
        flexDirection: "column",
      },
    },
    item: {
      position: "relative",
    },
    link: linkStyle,
    content: {
      ...contentStyle,
      ...popoverStyle,
      transformOrigin: "top left",

      _horizontal: {
        top: "100%",
      },
      _vertical: {
        left: "100%",
      },
    },
    viewport: {
      flex: "none",
      position: "relative",
      pointerEvents: "auto",
      transformOrigin: "top center",
      width: "var(--viewport-width)",
      height: "var(--viewport-height)",
    },
    viewportPositioner: {
      ...positionerStyle,
      top: "100%",
    },
  },
});
