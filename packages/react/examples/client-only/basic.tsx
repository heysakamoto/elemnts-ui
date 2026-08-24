import { ClientOnly, Text } from "@moto-ui/react";

export default function Basic() {
  return (
    <ClientOnly>
      <Text>Content only renders after hydration</Text>
    </ClientOnly>
  );
}
