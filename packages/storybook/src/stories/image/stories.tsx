import { Image } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Image,
	title: "Data Display/Image",
	args: {},
	parameters: {
		docs: {
			description: {
				component: "Displays images",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Circular } from "./circular";
export { Height } from "./height";
