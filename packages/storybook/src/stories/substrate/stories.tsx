import preview from "@.storybook/preview";
import { Substrate } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Substrate,
	title: "Utilities/Substrate",
	args: {
		value: 7,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A context provider that passes substrate depth levels down to child components to coordinate visual elevation and surface styles.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
