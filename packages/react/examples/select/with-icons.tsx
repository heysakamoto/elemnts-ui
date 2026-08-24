import {
  Container,
  createListCollection,
  Icon,
  InputGroup,
  Item,
  Portal,
  Select,
  Surface,
} from "@moto-ui/react";

const fruits = createListCollection({
  items: [
    {
      id: "1",
      label: "System",
      value: "system",
      icon: "tabler:device-laptop",
    },
    {
      id: "2",
      label: "Light",
      value: "light",
      icon: "tabler:sun",
    },
    {
      id: "3",
      label: "Dark",
      value: "dark",
      icon: "tabler:moon",
    },
  ],
});

export default function WithIcons() {
  return (
    <Container maxW="24rem">
      <Select collection={fruits as any}>
        <Select.Trigger>
          <Select.Control>
            <InputGroup>
              <Select.ValueText placeholder="Select theme" />
              <InputGroup.Addon>
                <Select.Indicator>
                  <Icon icon="tabler:chevron-down" width={16} height={16} />
                </Select.Indicator>
              </InputGroup.Addon>
            </InputGroup>
          </Select.Control>
        </Select.Trigger>
        <Portal>
          <Select.Positioner>
            <Select.Content asChild>
              <Surface delta={1} rounded="24" colorPalette="neutral">
                <Surface.Content p="4" gap="2">
                  {fruits.items.map((item) => (
                    <Select.Item key={item.id} item={item} asChild>
                      <Item variant="secondary">
                        <Icon icon={item.icon} width={16} height={16} />
                        <Select.ItemText>{item.label}</Select.ItemText>
                      </Item>
                    </Select.Item>
                  ))}
                </Surface.Content>
              </Surface>
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select>
    </Container>
  );
}
