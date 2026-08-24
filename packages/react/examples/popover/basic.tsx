import { Button, Popover, Portal, Surface } from "@moto-ui/react";

export default function Basic() {
	return (
		<Popover>
			<Popover.Trigger asChild>
				<Button
					rounded="24"
					colorPalette="neutral"
					variant="secondary"
				>
					What is this component?
				</Button>
			</Popover.Trigger>
			<Portal>
				<Popover.Positioner>
					<Popover.Content asChild>
						<Surface
							delta={1}
							rounded="24"
							maxW="18rem"
						>
							{" "}
							<Surface.Content
								py="8"
								px="12"
							>
								<Surface.Description>
									This is a popover component that displays content in a portal
									when clicked.
								</Surface.Description>
							</Surface.Content>
						</Surface>
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover>
	);
}
