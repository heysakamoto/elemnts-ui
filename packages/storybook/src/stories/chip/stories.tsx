import preview from "@.storybook/preview";
import { Chip } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Chip,
	title: "Data Display/Chip",
	args: {
		size: "sm",
		variant: "primary",
		rounded: "24",
	},
	parameters: {
		docs: {
			description: {
				component:
					"Compact badges for displaying labels, statuses, and categories",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
export { WithIcon } from "./with-icon";
