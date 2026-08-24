import { Kbd, Text } from "@moto-ui/react";

export default function Inline() {
  return (
    <Text fontSize="14" color="fg.secondary">
      Use{" "}
      <Kbd size="2xs" variant="secondary">
        ⌘
      </Kbd>{" "}
      to open the command palette.
    </Text>
  );
}
