import preview from "@.storybook/preview";
import { Button, Popover, Portal, Surface } from "@moto-ui/react";

const meta = preview.meta({
	title: "Same Width",
	component: Popover,
});

export const SameWidth = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Enable the `positioning.sameWidth` prop to have the popover content match the trigger’s width.",
			},
		},
	},
	render: (args) => (
		<Popover
			positioning={{ sameWidth: true }}
			{...args}
		>
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
	),
});
