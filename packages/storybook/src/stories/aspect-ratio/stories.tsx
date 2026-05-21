import preview from "@.storybook/preview";
import { AspectRatio } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: AspectRatio,
	title: "Layouts/AspectRatio",
	args: {
		ratio: "16/9",
	},
	parameters: {
		docs: {
			description: {
				component:
					"A component used to embed responsive videos, maps, and images while maintaining a specific aspect ratio.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
