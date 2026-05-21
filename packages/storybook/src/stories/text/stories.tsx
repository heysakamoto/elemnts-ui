import { Text } from "@moto-ui/react";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Text,
	title: "Typography/Text",
	parameters: {
		docs: {
			description: {
				component: "Renders text and paragraphs in the interface.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { LineClamp } from "./line-clamp";
export { Sizes } from "./sizes";
export { Truncate } from "./truncate";
export { Weights } from "./weights";
