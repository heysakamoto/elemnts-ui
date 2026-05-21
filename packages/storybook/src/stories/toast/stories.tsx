import preview from "@.storybook/preview";
import { Toaster } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Toaster,
	title: "Feedback/Toast",
	parameters: {
		docs: {
			description: {
				component:
					"A brief on-screen notification that delivers feedback about a recent action.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { CustomIcon } from "./custom-icon";
export { Dismissable } from "./dismissable";
export { Duration } from "./duration";
export { Type } from "./type";
