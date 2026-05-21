import preview from "@.storybook/preview";
import { SegmentGroup } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: SegmentGroup,
	title: "Forms/SegmentGroup",
	args: {
		orientation: "horizontal",
		variant: "primary",
		size: "md",
	},
	parameters: {
		docs: {
			description: {
				component:
					"A component that allows users to select a single value from a set of options, presented as a group of segments.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
export { Vertical } from "./vertical";
