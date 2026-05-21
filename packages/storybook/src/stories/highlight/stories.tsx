import preview from "@.storybook/preview";
import { Highlight } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Highlight,
	title: "Typography/Highlight",
	parameters: {
		docs: {
			description: {
				component: "Highlights specified substrings within text.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Multiple } from "./multiple";
export { SearchQuery } from "./search-query";
export { Squiggle } from "./squiggle";
