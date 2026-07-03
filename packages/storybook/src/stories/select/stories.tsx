import { Select } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Select,
	title: "Collections/Select",
	args: {
		multiple: false,
		disabled: false,
	},
	parameters: {
		docs: {
			description: {
				component:
					"Allows the selection of a value from a set of predefined choices.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Disabled } from "./disabled";
export { Group } from "./group";
export { WithIcons } from "./with-icons";
