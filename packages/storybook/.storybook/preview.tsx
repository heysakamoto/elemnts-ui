import { useTheme } from "../src/hooks/use-theme";
import "./index.css";
import { Container, Section, Stack } from "@moto-ui/react";
import addonA11y from "@storybook/addon-a11y";
import addonDocs from "@storybook/addon-docs";
import { definePreview } from "@storybook/react-vite";

const preview = definePreview({
	tags: ["autodocs"],
	addons: [addonDocs(), addonA11y()],
	globalTypes: {
		theme: {
			description: "Global theme for components",
			defaultValue: "light",
			toolbar: {
				title: "Theme",
				icon: "circlehollow",
				items: [
					{ value: "light", icon: "circlehollow", title: "Light" },
					{ value: "dark", icon: "circle", title: "Dark" },
				],
			},
		},
	},
	parameters: {
		a11y: { options: { xpath: true } },
		layout: "fullscreen",
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story, context) => {
			useTheme(context.globals.theme);

			return (
				<Section bgColor="bg.primary">
					<Container maxW="40rem">
						<Stack
							p="12"
							minH="100dvh"
							align="center"
							justify="center"
							direction="column"
						>
							<Story />
						</Stack>
					</Container>
				</Section>
			);
		},
	],
});

export default preview;
