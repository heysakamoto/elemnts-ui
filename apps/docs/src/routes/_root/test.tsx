import { Menu, Portal } from "@moto-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_root/test")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Menu.Root>
			<Menu.Trigger>Open</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						<Menu.Item value="item1">Item 1</Menu.Item>
						<Menu.Item value="item2">Item 2</Menu.Item>
						<Menu.Item value="item3">Item 3</Menu.Item>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
}
