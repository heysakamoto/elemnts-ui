import { Button, Icon, VisuallyHidden } from "@moto-ui/react";

export default function WithIcon() {
  return (
    <Button iconOnly type="button" variant="ghost">
      <Icon width={16} height={16} icon="tabler:play" />
      <VisuallyHidden>Notifications</VisuallyHidden>
    </Button>
  );
}
