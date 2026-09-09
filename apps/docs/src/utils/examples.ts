import type { ComponentType } from "react";

const examples = import.meta.glob<{ default: ComponentType }>([
  "../../../../packages/react/src/components/*/examples/*.tsx",
  "../../../packages/react/src/providers/*/examples/*.tsx",
]);

const sources = import.meta.glob<string>(
  [
    "../../../../packages/react/src/components/*/examples/*.tsx",
    "../../../packages/react/src/providers/*/examples/*.tsx",
  ],
	{
		query: "?raw",
		import: "default",
	},
);

export function getExample(name: string) {
	const folder = name.split(":")[0];
	const filename = name.split(":")[1];

  const componentTarget = `../../../../packages/react/src/components/${folder}/examples/${filename}.tsx`;
  const providerTarget = `../../../../packages/react/src/providers/${folder}/examples/${filename}.tsx`;

  const target = examples[componentTarget] ? componentTarget : providerTarget;

  if (!examples[target]) {
    throw new Error(`Example "${filename}" not found in "${folder}"`);
  }
  return {
    source: sources[target],
    example: examples[target],
  };
}
