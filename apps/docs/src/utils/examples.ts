import type { ComponentType } from "react";

const examples = import.meta.glob<{ default: ComponentType }>(
	`../../../../packages/react/src/components/*/examples/*.tsx`,
);

const sources = import.meta.glob<string>(
	`../../../../packages/react/src/components/*/examples/*.tsx`,
	{
		query: "?raw",
		import: "default",
	},
);

export function getExample(name: string) {
	const folder = name.split(":")[0];
	const filename = name.split(":")[1];

	const target = `../../../../packages/react/src/components/${folder}/examples/${filename}.tsx`;

	if (!examples[target]) {
		throw new Error(`Example "${filename}" not found in "${folder}"`);
	}

	return {
		// These are async functions that Vite transforms
		source: sources[target],
		example: examples[target],
	};
}
