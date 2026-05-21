import preview from "@.storybook/preview";
import { Menu } from "@moto-ui/react";

const meta = preview.meta({
	title: "Overlays/Menu",
	component: Menu,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "Creates an accessible dropdown menu.",
			},
		},
	},
});

export default meta;
export { Basic } from "./basic";
export { Command } from "./command";
export { ContextMenu } from "./context-menu";
export { Group } from "./group";
export { Submenu } from "./submenu";
