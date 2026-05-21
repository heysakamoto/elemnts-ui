import preview from "@.storybook/preview";
import { Button, Dialog, Portal, Surface } from "@moto-ui/react";

const meta = preview.meta({
	title: "Cover",
	component: Dialog,
});

export const Cover = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					'Set `size="cover"` to expand the dialog to full-screen while leaving a small portion of the underlying page visible.',
			},
		},
	},
	render: (args) => (
		<Dialog
			{...args}
			size="cover"
		>
			<Dialog.Trigger asChild>
				<Button
					rounded="24"
					variant="surface"
					colorPalette="neutral"
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
							rounded="24"
						>
							{" "}
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
								<Dialog.CloseTrigger asChild>
									<Button
										variant="tertiary"
										colorPalette="neutral"
									>
										Deny
									</Button>
								</Dialog.CloseTrigger>
								<Dialog.CloseTrigger asChild>
									<Button variant="primary">Allow</Button>
								</Dialog.CloseTrigger>
							</Surface.Addon>
						</Surface>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog>
	),
});
