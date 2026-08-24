import { Stack, Tag } from "@moto-ui/react";

export default function Variants() {
  return (
    <Stack gap="8" direction="row" wrap="wrap">
      <Tag selected variant="primary">
        Primary
      </Tag>
      <Tag selected variant="secondary">
        Secondary
      </Tag>
      <Tag selected variant="tertiary">
        Tertiary
      </Tag>
    </Stack>
  );
}
