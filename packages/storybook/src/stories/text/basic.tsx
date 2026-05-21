import { Text } from "@moto-ui/react";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Text,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Basic usage of the Text component.",
			},
		},
	},
	render: () => <Text>Sphinx of black quartz, judge my vow.</Text>,
});
