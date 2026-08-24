import { Button, Chip, Group, Item, Pagination } from "@moto-ui/react";

export default function Attached() {
  return (
    <Pagination count={800} pageSize={10}>
      <Group attached>
        <Pagination.PrevTrigger asChild>
          <Button size="xs" roundedStart="16" variant="tertiary">
            Prev
          </Button>
        </Pagination.PrevTrigger>
        <Pagination.Context>
          {(ctx) => {
            return ctx.pages.map((page, idx) => {
              if (page.type === "ellipsis") {
                return (
                  <Pagination.Ellipsis key={idx.toString()} index={idx} asChild>
                    <Chip size="xs" variant="secondary">
                      ...
                    </Chip>
                  </Pagination.Ellipsis>
                );
              }
              return (
                <Pagination.Item key={idx.toString()} {...page} asChild>
                  <Item
                    iconOnly
                    variant="secondary"
                    selected={page.value === ctx.page}
                  >
                    {page.value}
                  </Item>
                </Pagination.Item>
              );
            });
          }}
        </Pagination.Context>
        <Pagination.NextTrigger asChild>
          <Button size="xs" roundedEnd="16" variant="tertiary">
            Next
          </Button>
        </Pagination.NextTrigger>
      </Group>
    </Pagination>
  );
}
