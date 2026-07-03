import { ImageCropper } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: ImageCropper,
	title: "Data Display/ImageCropper",
	args: {
		aspectRatio: 1,
	},
	parameters: {
		docs: {
			description: {
				component: "A component used to crop and transform images.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Controls } from "./controls";
