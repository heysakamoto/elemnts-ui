import { Icon } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Icon,
	title: "Data Display/Icon",
	args: {
		width: 20,
		height: 20,
	},
	parameters: {
		docs: {
			description: {
				component: "Renders an SVG icon",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Collections } from "./collections";
export { Custom } from "./custom";
export { Storage } from "./storage";
