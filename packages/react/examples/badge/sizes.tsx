import { Avatar, Badge, Container, For, Stack } from "@moto-ui/react";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

export default function Sizes() {
  return (
    <Container>
      <Stack gap="12" align="center" justify="center">
        <For each={sizes}>
          {(size) => (
            <Badge size={size} key={size}>
              <Avatar size="sm">
                <Avatar.Image
                  src="https://images.pexels.com/photos/4611686/pexels-photo-4611686.jpeg?w=160&h=160"
                  alt={`avatar-${size}`}
                />
                <Avatar.Fallback fontSize="14">J</Avatar.Fallback>
              </Avatar>
              <Badge.Indicator />
            </Badge>
          )}
        </For>
      </Stack>
    </Container>
  );
}
