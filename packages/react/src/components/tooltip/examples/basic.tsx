import { Button, Portal, Surface, Tooltip } from "@moto-ui/react";

export default function Basic() {
	return (
		<Tooltip>
			<Tooltip.Trigger asChild>
				<Button
					size="sm"
					variant="surface"
				>
					Hover
				</Button>
			</Tooltip.Trigger>
			<Portal>
				<Tooltip.Positioner>
					<Tooltip.Content asChild>
						<Surface
							delta={1}
							rounded="8"
							asChild
						>
							<Surface.Content
								px="10"
								py="4"
							>
								<Surface.Description>Add to library</Surface.Description>
							</Surface.Content>
						</Surface>
					</Tooltip.Content>
				</Tooltip.Positioner>
			</Portal>
		</Tooltip>
	);
}
