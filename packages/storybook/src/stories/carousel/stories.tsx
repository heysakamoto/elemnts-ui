import { Carousel } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Carousel,
	title: "Disclosure/Carousel",
	args: {
		slideCount: 5,
		autoplay: false,
		loop: false,
		orientation: "horizontal",
	},
	parameters: {
		docs: {
			description: {
				component:
					"Enables cycling through a sequence of visual content within a container.",
			},
		},
	},
});

export default meta;

export { Autoplay } from "./autoplay";
export { Basic } from "./basic";
export { Spacing } from "./spacing";
export { Vertical } from "./vertical";
