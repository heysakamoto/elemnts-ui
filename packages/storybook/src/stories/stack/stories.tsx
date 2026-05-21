import preview from "@.storybook/preview";
import { Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "Layouts/Stack",
	component: Stack,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "Arranges its children in a vertical or horizontal stack.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { ResponsiveDirection } from "./responsive-direction";
export { Vertical } from "./vertical";
