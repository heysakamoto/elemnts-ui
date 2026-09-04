import { Button, ButtonGroup, Dialog, Portal, Surface } from "@moto-ui/react";

export default function Fullscreen() {
	return (
		<Dialog size="full">
			<Dialog.Trigger asChild>
				<Button
					variant="surface"
					size="sm"
				>
					Open
				</Button>
			</Dialog.Trigger>
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content asChild>
						<Surface
							p="16"
							delta={1}
							rounded="0"
							colorPalette="neutral"
						>
							<Surface.Content mt="4">
								<Dialog.Title>Approve</Dialog.Title>
								<Dialog.Description>
									Authorize a third-party service to access all media files in
									your account—such as photos, videos, and other stored items.
								</Dialog.Description>
							</Surface.Content>
							<Surface.Addon
								mt="16"
								direction="row"
								gap="8"
							>
								<ButtonGroup size="sm">
									<Dialog.CloseTrigger asChild>
										<ButtonGroup.Item variant="tertiary">Deny</ButtonGroup.Item>
									</Dialog.CloseTrigger>
									<Dialog.CloseTrigger asChild>
										<ButtonGroup.Item variant="primary">Allow</ButtonGroup.Item>
									</Dialog.CloseTrigger>
								</ButtonGroup>
							</Surface.Addon>
						</Surface>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	);
}
