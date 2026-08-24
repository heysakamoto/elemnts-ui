import type { ComponentType } from "react";

const examples = import.meta.glob<{ default: ComponentType }>(
  "../../../../packages/react/examples/**/*.tsx",
  {},
);

const sources = import.meta.glob<string>(
  "../../../../packages/react/examples/**/*.tsx",
  {
    query: "?raw",
    import: "default",
  },
);

export function getExample(name: string) {
  const folder = name.split(":")[0];
  const filename = name.split(":")[1];
  const filepath = `../../../../packages/react/examples/${folder}/${filename}.tsx`;

  return {
    source: sources[filepath],
    component: examples[filepath],
  };
}
