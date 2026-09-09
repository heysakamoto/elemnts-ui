import {
  Container,
  Icon,
  Kbd,
  Separator,
  Show,
  Surface,
  useFormatHotkey,
  useHotkey,
} from "@elemnts-ui/react";
import { useState } from "react";

export default function Basic() {
  const [liked, setLiked] = useState(false);
  const formatKey = useFormatHotkey();

  useHotkey({ hotkey: "mod+l", action: () => setLiked((v) => !v) });

  return (
    <Container maxW="20rem">
      <Surface rounded="12">
        <Surface.Header p="12">
          <Show when={liked}>
            <Icon
              width={40}
              height={40}
              icon="tabler:heart-filled"
              color="destructive.primary"
            />
          </Show>
          <Show when={!liked}>
            <Icon width={40} height={40} icon="tabler:heart" />
          </Show>
        </Surface.Header>
        <Separator />
        <Surface.Content p="12">
          <Surface.Description fontSize="16" textAlign="center">
            Press{" "}
            <Kbd size="2xs" fontSize="14" variant="secondary">
              {formatKey("mod+l")}
            </Kbd>{" "}
            to like/dislike
          </Surface.Description>
        </Surface.Content>
      </Surface>
    </Container>
  );
}
