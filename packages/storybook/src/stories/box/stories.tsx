import preview from "@.storybook/preview";
import { Box } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Box,
	title: "Layouts/Box",
	parameters: {
		docs: {
			description: {
				component:
					"The core styling component of moto ui, upon which all other components are built.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { PseudoProps } from "./pseudo-props";
export { Shorthand } from "./shorthand";
