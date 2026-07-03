import { Avatar, Button, HoverCard, Portal, Surface } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: HoverCard,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `HoverCard` component is used to reveal supplemental information when a user hovers or focuses on a target element.",
			},
		},
	},
	render: () => (
		<HoverCard>
			<HoverCard.Trigger asChild>
				<Button
					rounded="24"
					colorPalette="neutral"
					variant="secondary"
				>
					Hover me
				</Button>
			</HoverCard.Trigger>
			<Portal>
				<HoverCard.Positioner>
					<HoverCard.Content asChild>
						<Surface
							delta={1}
							rounded="24"
							maxW="20rem"
						>
							{" "}
							<Surface.Content
								p="8"
								gap="8"
								direction="row"
							>
								<Avatar size="md">
									<Avatar.Image src="https://images.pexels.com/photos/14001838/pexels-photo-14001838.jpeg?w=96&h=96" />
									<Avatar.Fallback>Sj</Avatar.Fallback>
								</Avatar>
								<Surface.Addon>
									<Surface.Title fontSize="14">Scarlett johanson</Surface.Title>
									<Surface.Description>
										A self-taught web designer, with more than 5 years of
										experience in the industry.
									</Surface.Description>
								</Surface.Addon>
							</Surface.Content>
						</Surface>
					</HoverCard.Content>
				</HoverCard.Positioner>
			</Portal>
		</HoverCard>
	),
});
