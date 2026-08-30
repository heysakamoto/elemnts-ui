import { defineSlotRecipe } from "@pandacss/dev";

export const colorThemeRecipe = defineSlotRecipe({
	className: "color-theme",
	slots: ["scope", "trigger", "indicator"],
	base: {
		scope: {},
		trigger: {},
		indicator: {
			userSelect: "none",
		},
	},
});
