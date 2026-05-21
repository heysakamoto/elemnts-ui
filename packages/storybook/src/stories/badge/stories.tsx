import preview from "@.storybook/preview";
import { Badge } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Badge,
	title: "Data Display/Badge",
	args: {
		size: "md",
		variant: "primary",
		placement: "top-right",
	},
	parameters: {
		docs: {
			description: {
				component:
					"Shows a small indicator attached to another element, often used for notification counts, status dots, or labels",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Content } from "./content";
export { Placements } from "./placements";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
