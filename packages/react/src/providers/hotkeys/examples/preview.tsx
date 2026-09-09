import {
  Container,
  Format,
  Kbd,
  Separator,
  Surface,
  Text,
  useFormatHotkey,
  useHotkey,
} from "@elemnts-ui/react";
import { useState } from "react";

export default function Preview() {
  const [count, setCount] = useState(0);
  const formatKey = useFormatHotkey();

  useHotkey({ hotkey: "mod+a", action: () => setCount((v) => v + 1) });

  return (
    <Container maxW="20rem">
      <Surface rounded="12">
        <Surface.Header p="12">
          <Surface.Addon
            direction="row"
            fontWeight="500"
            fontSize={[20, 24]}
            textAlign="center"
            alignItems="baseline"
          >
            <Format.Number value={count} minimumIntegerDigits={2} />
            <Text
              ml="4"
              as="span"
              fontSize="14"
              color="fg.tertiary"
              fontWeight="400"
            >
              times
            </Text>
          </Surface.Addon>
        </Surface.Header>
        <Separator />
        <Surface.Content p="12">
          <Surface.Description fontSize="16" textAlign="center">
            Press{" "}
            <Kbd size="2xs" fontSize="14" variant="secondary">
              {formatKey("mod+a")}
            </Kbd>{" "}
            anywhere on this page
          </Surface.Description>
        </Surface.Content>
      </Surface>
    </Container>
  );
}
