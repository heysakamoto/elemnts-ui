import preview from "@.storybook/preview";
import { Group } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Group,
	title: "Layouts/Group",
	args: {
		attached: false,
		fullWidth: false,
	},
	parameters: {
		docs: {
			description: {
				component: "Groups elements with optional visual attachment",
			},
		},
	},
});

export default meta;

export { Attached } from "./attached";
export { Basic } from "./basic";
export { ButtonGroup } from "./button-group";
export { FullWidth } from "./full-width";
