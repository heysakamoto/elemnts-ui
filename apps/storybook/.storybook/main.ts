import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  refs: (_, { configType }) => {
    if (configType === "DEVELOPMENT") {
      return {
        react: {
          url: "http://localhost:6007",
          title: "React Storybook running in development mode",
        },
        vue: {
          url: "http://localhost:6008",
          title: "Vue Storybook running in development mode",
        },
      };
    }
    return {
      react: {
        title: "Composed React Storybook running in production",
        url: "https://your-production-react-storybook-url",
      },
      vue: {
        title: "Composed Vue Storybook running in production",
        url: "https://your-production-vue-storybook-url",
      },
    };
  },
};
export default config;
