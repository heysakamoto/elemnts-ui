import preview from "@.storybook/preview";
import { Button } from "@moto-ui/react";
import { Basic } from "./basic";
import { Disabled } from "./disabled";
import { Icon } from "./icon";
import { Sizes } from "./sizes";
import { Variants } from "./variants";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Button,
	title: "Pressables/Button",
	args: {
		disabled: false,
		iconOnly: false,
		fullWidth: false,
	},
	parameters: {
		docs: {
			description: {
				component: "Triggers an action or event",
			},
		},
	},
});

export default meta;
export { Basic, Disabled, Icon, Sizes, Variants };
