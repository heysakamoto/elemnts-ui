import { Button, Popover, Portal, Surface } from "@moto-ui/react";

export default function SameWidth() {
	return (
		<Popover positioning={{ sameWidth: true }}>
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
						>
							<Surface.Content
								py="8"
								px="12"
							>
								<Surface.Description>A same-width popover.</Surface.Description>
							</Surface.Content>
						</Surface>
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover>
	);
}
