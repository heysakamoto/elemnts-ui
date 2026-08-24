import { Container, Icon, Item, Text } from "@moto-ui/react";
import { useState } from "react";

export default function Basic() {
  const [selected, setSelected] = useState(false);

  function toggle() {
    setSelected(!selected);
  }

  return (
    <Container maxW="20rem">
      <Item selected={selected} onClick={toggle}>
        <Icon width={16} height={16} icon="tabler:settings" />
        <Text>Configuration</Text>
      </Item>
    </Container>
  );
}
