import {
  Container,
  For,
  Item,
  Kbd,
  Surface,
  useFormatHotkey,
  useHotkeys,
} from "@elemnts-ui/react";
import { useState } from "react";

const commands = [
  { id: "save", hotkey: "mod+S", label: "Save", category: "File" },
  { id: "undo", hotkey: "mod+Z", label: "Undo", category: "Edit" },
  { id: "redo", hotkey: "mod+shift+Z", label: "Redo", category: "Edit" },
];

export default function MultipleShortcuts() {
  const formatHotkey = useFormatHotkey();
  const [value, setValue] = useState("");

  useHotkeys({
    commands: commands.map((c) => ({
      ...c,
      action: () => setValue(c.id),
    })),
  });

  return (
    <Container maxW="20rem">
      <Surface rounded="12">
        <Surface.Content p="4" gap="2">
          <For each={commands}>
            {(command) => (
              <Item
                key={command.id}
                variant="secondary"
                selected={value === command.id}
              >
                <span style={{ flex: 1 }}>{command.label}</span>
                <Kbd size="2xs" fontSize="12" variant="surface">
                  {formatHotkey(command.hotkey)}
                </Kbd>
              </Item>
            )}
          </For>
        </Surface.Content>
      </Surface>
    </Container>
  );
}
