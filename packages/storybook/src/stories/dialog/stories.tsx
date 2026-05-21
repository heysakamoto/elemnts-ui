import preview from "@.storybook/preview";
import { Dialog } from "@moto-ui/react";

const meta = preview.meta({
	title: "Overlays/Dialog",
	component: Dialog,
	tags: ["autodocs"],
	args: {
		size: "md",
		placement: "center",
	},
	parameters: {
		docs: {
			description: {
				component: "Displays a modal dialog prompt.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Cover } from "./cover";
export { Fullscreen } from "./fullscreen";
export { Placements } from "./placements";
export { Sizes } from "./sizes";
