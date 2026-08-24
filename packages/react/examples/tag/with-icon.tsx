import { Icon, Tag } from "@moto-ui/react";

export default function WithIcon() {
  return (
    <Tag>
      <Icon ml="-2" icon="tabler:play" width={16} height={16} />
      Play
    </Tag>
  );
}
