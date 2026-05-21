import preview from "@.storybook/preview";
import { Avatar } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Avatar,
	title: "Data Display/Avatar",
	args: {
		size: "md",
		variant: "primary",
	},
	parameters: {
		docs: {
			description: {
				component: "Displays a user's profile image or initials",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Colors } from "./colors";
export { Ring } from "./ring";
export { Shapes } from "./shapes";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
export { WithBadge } from "./with-badge";
