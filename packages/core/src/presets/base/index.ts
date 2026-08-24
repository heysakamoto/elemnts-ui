import { definePreset } from "@pandacss/dev";

import { config, theme } from "../../registry";

export const basePreset = definePreset({
	theme,
	...config,
	name: "@moto-ui/preset-base",
	presets: ["@pandacss/preset-base"],
});

export default basePreset;
