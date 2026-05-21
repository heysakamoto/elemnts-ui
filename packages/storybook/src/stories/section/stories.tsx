import preview from "@.storybook/preview";
import { Section } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Section,
	title: "Layouts/Section",
	args: {
		content: "center",
		screen: "fit",
	},
	parameters: {
		docs: {
			description: {
				component:
					"A semantic layout component for grouping related content within a page.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { ContentVariant } from "./content-variant";
export { ScreenVariant } from "./screen-variant";
