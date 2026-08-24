import { ClientOnly, Text } from "@moto-ui/react";

export default function Fallback() {
  return (
    <ClientOnly fallback={<Text color="fg.muted">Loading…</Text>}>
      <Text>Client-side content is ready.</Text>
    </ClientOnly>
  );
}
