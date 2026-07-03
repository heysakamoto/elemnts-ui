import { Swatch } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Swatch,
	title: "Utilities/Swatch",
	args: {
		size: "md",
	},
	parameters: {
		docs: {
			description: {
				component:
					"A small preview of a color, often used in color pickers or design tokens documentation.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Sizes } from "./sizes";
