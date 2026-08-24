import { Container, DecorativeBox, Sortable } from "@moto-ui/react";

const items = [
  { id: "1", label: "Item 1" },
  { id: "2", label: "Item 2" },
  { id: "3", label: "Item 3" },
];

export default function Horizontal() {
  return (
    <Container maxW="28rem">
      <Sortable gap="12" wrap="wrap" direction="row" defaultValue={items}>
        {items.map((item, idx) => {
          return (
            <Sortable.Item
              flex="1"
              index={idx}
              id={item.id}
              key={item.id}
              fontSize="14"
            >
              <Sortable.ItemHandle>
                <DecorativeBox h="3.5rem" minW="8rem">
                  {item.label}
                </DecorativeBox>
              </Sortable.ItemHandle>
            </Sortable.Item>
          );
        })}
      </Sortable>
    </Container>
  );
}
