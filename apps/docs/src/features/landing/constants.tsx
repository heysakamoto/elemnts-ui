import { lazy } from "react";

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
