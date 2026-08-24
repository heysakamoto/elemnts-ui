import { Icon, Kbd, KbdGroup, Surface } from "@moto-ui/react";

export function SearchFooter() {
  return (
    <Surface.Footer py="8" px="16">
      <KbdGroup iconOnly gap="16" size="sm" variant="tertiary">
        <Kbd>
          <Icon width={14} height={14} icon="boxicons:enter" />
          to select
        </Kbd>
        <Kbd>
          <Icon width={14} height={14} icon="boxicons:arrow-down" />
          to navigate
        </Kbd>
      </KbdGroup>
    </Surface.Footer>
  );
}
