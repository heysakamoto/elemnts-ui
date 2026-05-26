import preview from "@.storybook/preview";
import { Stat } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Stat,
	title: "Data Display/Stat",
	parameters: {
		docs: {
			description: {
				component: "Displays summary statistics or data points.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Indicator } from "./indicator";
export { Unit } from "./unit";
