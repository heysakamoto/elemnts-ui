import { ToggleGroup } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Pressables/ToggleGroup",
	component: ToggleGroup,
	tags: ["autodocs"],
	args: {
		multiple: false,
		disabled: false,
		attached: false,
		orientation: "horizontal",
	},
	parameters: {
		docs: {
			description: {
				component: "A set of two-state buttons that can be toggled on or off.",
			},
		},
	},
});

export default meta;

export { Attached } from "./attached";
export { Basic } from "./basic";
export { Controlled } from "./controlled";
export { Disabled } from "./disabled";
export { Multiple } from "./multiple";
export { Orientation } from "./orientation";
