import { Switch } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Switch,
	title: "Forms/Switch",
	args: {
		disabled: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"A control that allows the user to toggle between checked and unchecked states.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Disabled } from "./disabled";
export { WithLabel } from "./with-label";
