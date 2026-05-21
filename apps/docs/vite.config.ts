// import { devtools } from "@tanstack/devtools-vite";

import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import mdx from "fumadocs-mdx/vite";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import * as MdxConfig from "./source.config";

const config = defineConfig({
	plugins: [
		// devtools(),
		mdx(MdxConfig),
		svgr({ include: "**/*.svg?react" }),
		tsconfigPaths({ projects: ["./tsconfig.json"] }),
		tanstackStart(),
		viteReact({
			babel: {
				plugins: ["babel-plugin-react-compiler"],
			},
		}),
		cloudflare({ viteEnvironment: { name: "ssr" } }),
	],
});

export default config;
