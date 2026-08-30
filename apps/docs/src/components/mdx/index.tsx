import type { MDXComponents } from "mdx/types";

import { base } from "./base";
import { Code } from "./code";
import { CodeBlock } from "./code-block";
import { CodeBlockTabs } from "./code-block-tabs";
import { Example } from "./example";
import { Table } from "./table";
import { TimelineItem, TimelineRoot } from "./timeline";

export function getMDXComponents(components?: MDXComponents) {
	return {
		...components,
		...base,
		Example,
		code: Code,
		table: Table,
		tr: Table.Row,
		pre: CodeBlock,
		td: Table.Cell,
		tbody: Table.Body,
		thead: Table.Header,
		th: Table.ColumnHeader,
		Timeline: TimelineRoot,
		TimelineItem: TimelineItem,
		CodeBlockTabs: CodeBlockTabs,
		CodeBlockTab: CodeBlockTabs.Panel,
		CodeBlockTabsList: CodeBlockTabs.List,
		CodeBlockTabsTrigger: CodeBlockTabs.Trigger,
	} satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
	type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
