import { Slider } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Slider,
	title: "Forms/Slider",
	args: {
		defaultValue: [30],
	},
	parameters: {
		docs: {
			description: {
				component:
					"A control that allows the user to select a value from a range.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { MinMax } from "./min-max";
export { Range } from "./range";
