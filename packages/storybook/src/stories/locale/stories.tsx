import preview from "@.storybook/preview";
import { Locale } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Locale,
	title: "Internationalization/Locale",
	args: {
		locale: "en-US",
	},
	parameters: {
		docs: {
			description: {
				component:
					"A provider that manages locale-specific settings like text direction and number formatting.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { RTL } from "./rtl";
