import preview from "@.storybook/preview";
import { Button, Portal, Surface, Tooltip } from "@moto-ui/react";

const meta = preview.meta({
	title: "Delay",
	component: Tooltip,
});

export const Delay = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the show and hide delays for the tooltip using the `openDelay` and `closeDelay` props.",
			},
		},
	},
	render: () => (
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
	),
});
