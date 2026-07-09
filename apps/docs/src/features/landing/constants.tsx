import { Anchor } from "@moto-ui/react";
import { Fragment, lazy } from "react";

const SwitchExample = lazy(() =>
	import("./components/examples/switch").then((module) => ({
		default: module.SwitchExample,
	})),
);
const SegmentGroupExample = lazy(() =>
	import("./components/examples/segment-group").then((module) => ({
		default: module.SegmentGroupExample,
	})),
);
const JsonTreeViewExample = lazy(() =>
	import("./components/examples/json-tree-view").then((module) => ({
		default: module.JsonTreeViewExample,
	})),
);
const MenuExample = lazy(() =>
	import("./components/examples/menu").then((module) => ({
		default: module.MenuExample,
	})),
);

export const LANDING_HERO_EXAMPLES = [
	{ id: "switch", title: "Switch", component: SwitchExample },
	{
		id: "segment-group",
		title: "SegmentGroup",
		component: SegmentGroupExample,
	},
	{
		id: "json-tree-view",
		title: "JsonTreeView",
		component: JsonTreeViewExample,
	},
	{ id: "menu", title: "Menu", component: MenuExample },
];

export const LANDING_INSTALLATION_TIMELINES = [
	{
		id: "1",
		frontmatter: {
			title: "Prerequisites",
			description: (
				<Fragment>
					Before jumping in, make sure your Panda project is all set up. If you
					haven't done that yet, check out{" "}
					<Anchor
						target="_blank"
						href="https://panda-css.com/docs/overview/getting-started"
					>
						pandacss installation guide
					</Anchor>{" "}
					and once you've completed that, come back to this guide.
				</Fragment>
			),
		},
		tabs: undefined,
	},
	{
		id: "2",
		frontmatter: {
			title: "Install dependencies",
			description: (
				<Fragment>
					Moto UI is built on{" "}
					<Anchor
						href="https://ark-ui.com"
						target="_blank"
					>
						Ark UI
					</Anchor>{" "}
					acting as its headless framework, which delivers a collection of
					unstyled, accessible components.
				</Fragment>
			),
		},
		tabs: [
			{
				label: "npm",
				value: "npm",
				lang: "bash",
				disabled: false,
				content:
					"npm i @moto-ui/react @moto-ui/preset-base @moto-ui/styled-system",
			},
			{
				label: "yarn",
				value: "yarn",
				lang: "bash",
				disabled: false,
				content:
					"yarn add @moto-ui/react @moto-ui/preset-base @moto-ui/styled-system",
			},
			{
				label: "pnpm",
				value: "pnpm",
				lang: "bash",
				disabled: false,
				content:
					"pnpm i @moto-ui/react @moto-ui/preset-base @moto-ui/styled-system",
			},
			{
				label: "bun",
				value: "bun",
				lang: "bash",
				disabled: false,
				content:
					"bun add @moto-ui/react @moto-ui/preset-base @moto-ui/styled-system",
			},
		],
	},
	{
		id: "3",
		frontmatter: {
			title: "Update Panda config file",
			description: `Configure your Panda CSS setup by adding the required settings to your config file.`,
		},
		tabs: [
			{
				label: "React",
				value: "react",
				lang: "ts",
				disabled: false,
				content: `{
  outExtension: "js",
  jsxFramework: "react",
  presets: [basePreset],
  outdir: "styled-system",
  importMap: "@moto-ui/styled-system",
  include: [
    "src/**/*.{(ts, tsx)}",
    "node_modules/@moto-ui/react/dist/buildinfo.json",
  ],
}`,
			},
			{
				label: "Solid",
				value: "solid",
				lang: "ts",
				disabled: true,
				content: ``,
			},
			{
				label: "Svelte",
				value: "svelte",
				lang: "ts",
				disabled: true,
				content: ``,
			},
			{
				label: "Vue",
				value: "vue",
				lang: "ts",
				disabled: true,
				content: ``,
			},
		],
	},
	{
		id: "4",
		frontmatter: {
			title: "Usage",
			description: `Start building with Moto UI by importing the components you need from the appropriate packages.`,
		},
		tabs: [
			{
				label: "React",
				value: "react",
				lang: "tsx",
				disabled: false,
				content: `import { Button } from "@moto-ui/react";

export default function App() {
  return (
    <Button>Click me</Button>
  );
}`,
			},
			{
				label: "Solid",
				value: "solid",
				lang: "tsx",
				disabled: true,
				content: ``,
			},
			{
				label: "Svelte",
				value: "svelte",
				lang: "tsx",
				disabled: true,
				content: ``,
			},
			{
				label: "Vue",
				value: "vue",
				lang: "tsx",
				disabled: true,
				content: ``,
			},
		],
	},
];
