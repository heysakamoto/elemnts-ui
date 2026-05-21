import preview from "@.storybook/preview";
import { Locale, Stack, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Locale,
});

export const Basic = meta.story({
	args: {
		locale: "en-US",
	},
	parameters: {
		docs: {
			description: {
				story:
					"The Locale component (internally LocaleProvider) provides localization settings to all child components. This includes the locale string (e.g., en-US, ar-EG) and the text direction (dir).",
			},
		},
	},
	render: (args) => (
		<Stack
			gap="2"
			fontSize="14"
			justify="center"
		>
			<Text color="fg.tertiary">English (US)</Text>
			<Locale {...args}>
				<Text>1234.56</Text>
			</Locale>
		</Stack>
	),
});
