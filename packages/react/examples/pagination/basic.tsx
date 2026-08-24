import { Button, Item, Pagination, Text } from "@moto-ui/react";

export default function Basic() {
  return (
    <Pagination defaultPage={4} count={800} pageSize={10}>
      <Pagination.PrevTrigger asChild>
        <Button size="xs" variant="surface">
          Prev
        </Button>
      </Pagination.PrevTrigger>
      <Pagination.Context>
        {(ctx) => {
          return ctx.pages.map((page, idx) => {
            if (page.type === "ellipsis") {
              return (
                <Pagination.Ellipsis key={idx.toString()} index={idx}>
                  <Text>...</Text>
                </Pagination.Ellipsis>
              );
            }
            return (
              <Pagination.Item key={idx.toString()} {...page}>
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
        <Button size="xs" variant="surface">
          Next
        </Button>
      </Pagination.NextTrigger>
    </Pagination>
  );
}
