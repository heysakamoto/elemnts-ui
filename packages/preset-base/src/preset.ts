import { definePreset } from "@pandacss/dev";

import { conditions } from "./conditions";
import { globalCss } from "./global-css";
import { keyframes } from "./keyframes";
import { breakpoints } from "./theme/breakpoints";
import { recipes } from "./theme/recipes";
import { semanticTokens } from "./theme/semantic-tokens";
import { slotRecipes } from "./theme/slot-recipes";
import { tokens } from "./theme/tokens";
import { utilities } from "./utilities";

export const basePreset = definePreset({
	name: "@moto-ui/preset-base",
	presets: ["@pandacss/preset-base"],
	utilities,
	conditions,
	globalCss,
	theme: {
		tokens,
		recipes,
		keyframes,
		slotRecipes,
		breakpoints,
		semanticTokens,
	},
});
