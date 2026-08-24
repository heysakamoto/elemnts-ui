import { ClientOnly, Text } from "@moto-ui/react";

export default function RenderFn() {
  return (
    <ClientOnly fallback={<Text>Waiting for client…</Text>}>
      {() => <Text>Window width: {window.innerWidth}px</Text>}
    </ClientOnly>
  );
}
