import { Icon, Item } from "@moto-ui/react";

export default function IconOnly() {
  return (
    <Item selected iconOnly>
      <Icon width={16} height={16} icon="tabler:plus" />
    </Item>
  );
}
