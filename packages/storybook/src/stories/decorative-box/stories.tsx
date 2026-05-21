import { DecorativeBox } from "@moto-ui/react";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: DecorativeBox,
	title: "Layouts/DecorativeBox",
	args: {
		variant: "primary",
	},
	parameters: {
		docs: {
			description: {
				component:
					"A box with background styling meant to highlight or contain items visually.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Variants } from "./variants";
