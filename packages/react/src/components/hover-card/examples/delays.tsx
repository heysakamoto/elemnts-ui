import {
	Avatar,
	Button,
	ButtonGroup,
	HoverCard,
	Portal,
	Separator,
	Surface,
} from "@elemnts-ui/react";

export default function Delays() {
	return (
		<HoverCard openDelay={200} closeDelay={200}>
			<HoverCard.Trigger asChild>
				<Button size="sm" variant="secondary">
					Hover me
				</Button>
			</HoverCard.Trigger>
			<Portal>
				<HoverCard.Positioner>
					<HoverCard.Content asChild>
						<Surface
							delta={1}
							py="10"
							rounded="16"
							maxW="20rem"
							colorPalette="neutral"
						>
							<Surface.Header px="12" gap="12" direction="row">
								<Avatar size="lg">
									<Avatar.Image src="https://images.pexels.com/photos/14001838/pexels-photo-14001838.jpeg?w=96&h=96" />
									<Avatar.Fallback>Sj</Avatar.Fallback>
								</Avatar>
							</Surface.Header>
							<Surface.Content gap="4" px="12" mt="12">
								<Surface.Title fontSize="14">Scarlett johanson</Surface.Title>
								<Surface.Description fontSize="14">
									A self-taught web designer, with more than 5 years of
									experience in the industry.
								</Surface.Description>
							</Surface.Content>
							<Separator orientation="horizontal" my="12" />
							<Surface.Footer px="12" gap="12" direction="row">
								<ButtonGroup size="sm" fullWidth>
									<ButtonGroup.Item>Profile</ButtonGroup.Item>
									<ButtonGroup.Item variant="secondary">
										Message
									</ButtonGroup.Item>
								</ButtonGroup>
							</Surface.Footer>
						</Surface>
					</HoverCard.Content>
				</HoverCard.Positioner>
			</Portal>
		</HoverCard>
	);
}
