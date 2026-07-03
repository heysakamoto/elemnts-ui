import { Timer } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Timer,
	title: "Data Display/Timer",
	args: {
		autoStart: false,
		countdown: false,
		interval: 1000,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A component used to manage and display time-based counts or countdowns.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Countdown } from "./countdown";
