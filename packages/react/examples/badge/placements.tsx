import { Avatar, Badge, Container, For, Stack } from "@moto-ui/react";

const placements = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
] as const;

export default function Placements() {
  return (
    <Container maxW="20rem">
      <Stack gap="8" align="center" justify="center">
        <For each={placements}>
          {(placement) => (
            <Badge size="xs" placement={placement} key={placement}>
              <Avatar size="sm">
                <Avatar.Image
                  src="https://images.pexels.com/photos/4611686/pexels-photo-4611686.jpeg?w=160&h=160"
                  alt={`avatar-${placement}`}
                />
                <Avatar.Fallback fontSize="14">Ko</Avatar.Fallback>
              </Avatar>
              <Badge.Indicator />
            </Badge>
          )}
        </For>
      </Stack>
    </Container>
  );
}
