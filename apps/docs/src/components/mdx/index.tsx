import type { MDXComponents } from "mdx/types";

import { base } from "./base";
import { Code } from "./code";
import { CodeBlock } from "./code-block";
import { CodeBlockTabs } from "./code-block-tabs";
import { Example } from "./example";
import { Table } from "./table";

export function getMDXComponents(components?: MDXComponents) {
	return {
		...components,
		...base,
		Example,
		table: Table,
		tr: Table.Row,
		th: Table.ColumnHeader,
		td: Table.Cell,
		tbody: Table.Body,
		thead: Table.Header,
		CodeBlockTab: CodeBlockTabs.Panel,
		CodeBlockTabs: CodeBlockTabs,
		CodeBlockTabsList: CodeBlockTabs.List,
		CodeBlockTabsTrigger: CodeBlockTabs.Trigger,
		code: (props) => <Code {...props} />,
		pre: ({ ref: _ref, ...props }) => <CodeBlock {...props} />,
	} satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
	type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
