import { Button, Dialog, Portal, Surface } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Fullscreen",
	component: Dialog,
});

export const Fullscreen = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the `size` prop to `full` to render the dialog in full-screen, occupying the entire viewport.",
			},
		},
	},
	render: (args) => (
		<Dialog
			{...args}
			size="full"
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
			</Dialog.Trigger>{" "}
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content asChild>
						<Surface
							p="16"
							delta={1}
							rounded="0"
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
