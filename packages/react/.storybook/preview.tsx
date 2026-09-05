import { Container, Section, Stack } from "@elemnts-ui/react";
import "../src/index.css";
import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
	parameters: {
		layout: "fullscreen",
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			test: "todo",
		},
	},
	decorators: [
		(Story) => (
			<Section
				as="main"
				minH="100vh"
				alignContent="center"
				colorPalette="neutral"
			>
				<Container maxW="40rem">
					<Stack
						w="full"
						direction="column"
						align="center"
					>
						<Story />
					</Stack>
				</Container>
			</Section>
		),
	],
};

export default preview;
