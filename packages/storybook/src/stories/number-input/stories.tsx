import { NumberInput } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: NumberInput,
	title: "Forms/NumberInput",
	args: {
		min: Number.MIN_SAFE_INTEGER,
		max: Number.MAX_SAFE_INTEGER,
		step: 1,
		disabled: false,
		invalid: false,
		readOnly: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A component that allows users to enter a number and increment or decrement the value.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { MinMax } from "./min-max";
export { Scrubber } from "./scrubber";
export { Step } from "./step";
