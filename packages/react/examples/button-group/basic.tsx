import { ButtonGroup } from "@moto-ui/react";

export default function Basic() {
  return (
    <ButtonGroup>
      <ButtonGroup.Item rounded="16">
        Merge
        <ButtonGroup.Separator />
      </ButtonGroup.Item>
      <ButtonGroup.Item variant="ghost" rounded="16">
        Cancel
      </ButtonGroup.Item>
    </ButtonGroup>
  );
}
