import preview from "@.storybook/preview";
import { Button, Portal, Surface, Tooltip } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Tooltip,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Displays supplementary information when a user hovers over an element.",
			},
		},
	},
	render: () => (
		<Tooltip>
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
