import { Chip, Icon } from "@moto-ui/react";

export default function WithIcon() {
  return (
    <Chip size="xs" colorPalette="success">
      <Icon ml="-2" icon="tabler:check" width={14} height={14} />
      Completed
    </Chip>
  );
}
