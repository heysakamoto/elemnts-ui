import preview from "@.storybook/preview";
import { Kbd } from "@moto-ui/react";

const meta = preview.meta({
	component: Kbd,
	title: "Typography/Kbd",
	args: {
		colorPalette: "accent",
		variant: "primary",
	},
	parameters: {
		docs: {
			description: {
				component: "Displays keyboard shortcuts for an action",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Inline } from "./inline";
export { NavigationKeys } from "./navigation-keys";
export { Palettes } from "./palettes";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
