import preview from "@.storybook/preview";
import { Environment } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: Environment,
	title: "Utilities/Environment",
	parameters: {
		docs: {
			description: {
				component:
					"A provider that allows components to access window and document objects in different environments like iframes or Shadow DOM.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
