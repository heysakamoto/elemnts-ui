import { definePreset } from "@pandacss/dev";

import { config, theme } from "../../registry";

const basePreset = definePreset({
	theme,
	...config,
	name: "@elemnts-ui/preset-base",
	presets: ["@pandacss/preset-base"],
});

export default basePreset;
