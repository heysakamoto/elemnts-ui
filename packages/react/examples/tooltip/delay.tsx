import { Button, Portal, Surface, Tooltip } from "@moto-ui/react";

export default function Delay() {
	return (
		<Tooltip
			openDelay={200}
			closeDelay={200}
		>
			<Tooltip.Trigger asChild>
				<Button
					rounded="24"
					colorPalette="neutral"
					variant="secondary"
				>
					Hover me
				</Button>
			</Tooltip.Trigger>
			<Portal>
				<Tooltip.Positioner>
					<Tooltip.Content asChild>
						<Surface
							delta={1}
							rounded="24"
						>
							<Surface.Content
								px="8"
								py="4"
							>
								<Surface.Description>Save your changes</Surface.Description>
							</Surface.Content>
						</Surface>
					</Tooltip.Content>
				</Tooltip.Positioner>
			</Portal>
		</Tooltip>
	);
}
