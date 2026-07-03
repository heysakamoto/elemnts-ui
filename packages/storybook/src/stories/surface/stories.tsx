import { Surface } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Surface,
	title: "Data Display/Surface",
	args: {
		delta: 1,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A container component that applies surface styling and provides context to child components",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Variants } from "./variants";
