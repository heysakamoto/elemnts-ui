import { defineMain } from "@storybook/react-vite/node";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineMain({
	framework: "@storybook/react-vite",
	staticDirs: ["../public"],
	docs: {
		docsMode: true,
		defaultName: "Moto UI documentation",
	},
	stories: [
		"../src/stories/**/*.mdx",
		"../src/stories/**/*stories.@(js|ts|tsx|mjs|jsx)",
	],
	addons: [
		{ name: "@chromatic-com/storybook" },
		{ name: "@storybook/addon-vitest" },
		{ name: "@storybook/addon-a11y" },
		{ name: "@storybook/addon-docs" },
		{ name: "@storybook/addon-mcp" },
	],
	viteFinal: async (config) => {
		return mergeConfig(config, {
			plugins: [tsconfigPaths()],
		});
	},
});
