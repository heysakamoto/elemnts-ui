import preview from "@.storybook/preview";
import { Button, Popover, Portal, Surface } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Popover,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Popover` component is used to show contextual information anchored to a trigger element.",
			},
		},
	},
	render: (args) => (
		<Popover {...args}>
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
	),
});
