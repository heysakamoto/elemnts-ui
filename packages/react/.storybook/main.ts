import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	framework: "@storybook/react-vite",
	stories: ["../src/**/stories.tsx"],
	addons: [
		"@chromatic-com/storybook",
		"@storybook/addon-vitest",
		"@storybook/addon-a11y",
		"@storybook/addon-docs",
	],
};
export default config;
