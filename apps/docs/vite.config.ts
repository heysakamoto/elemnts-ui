import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import mdx from "fumadocs-mdx/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import * as MdxConfig from "./source.config";

export default defineConfig({
	plugins: [
		tsconfigPaths({ projects: ["./tsconfig.json"] }),
		tanstackStart({
			server: {
				build: {
					inlineCss: true,
				},
			},
		}),
		nitro(),
		viteReact({
			babel: {
				plugins: ["babel-plugin-react-compiler"],
			},
		}),
		svgr({ include: "**/*.svg?react" }),
		mdx(MdxConfig),
	],
	optimizeDeps: {
		exclude: [
			"@moto-ui/react",
			"@moto-ui/preset-base",
			"@moto-ui/styled-system",
		],
	},
});
