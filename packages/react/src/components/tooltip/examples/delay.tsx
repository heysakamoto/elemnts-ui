import { Button, Portal, Surface, Tooltip } from "@moto-ui/react";

export default function Delay() {
	return (
		<Tooltip
			openDelay={200}
			closeDelay={200}
		>
			<Tooltip.Trigger asChild>
				<Button
					variant="surface"
					size="sm"
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
