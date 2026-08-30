import "../src/index.css";
import { Container, Section } from "@moto-ui/react";
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
          <Story />
        </Container>
      </Section>
    ),
  ],
};

export default preview;
