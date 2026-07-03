import { Separator } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Separator,
	title: "Layouts/Separator",
	args: {
		orientation: "horizontal",
	},
	parameters: {
		docs: {
			description: {
				component: "Visually separates sections of content",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Label } from "./label";
export { Sizes } from "./sizes";
export { Vertical } from "./vertical";
