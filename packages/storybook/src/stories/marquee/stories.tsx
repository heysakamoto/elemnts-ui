import { Marquee } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Marquee,
	title: "Data Display/Marquee",
	args: {
		autoFill: false,
		defaultPaused: false,
		delay: 0,
		loopCount: 0,
		pauseOnInteraction: false,
		reverse: false,
		side: "start",
		spacing: "1rem",
		speed: 50,
	},
	parameters: {
		docs: {
			description: {
				component:
					"Display logos, images, or text in a continuous horizontal or vertical scroll.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Edges } from "./edges";
export { Reversed } from "./reversed";
export { Vertical } from "./vertical";
