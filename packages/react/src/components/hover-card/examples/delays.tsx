import { Avatar, Button, HoverCard, Portal, Surface } from "@moto-ui/react";

export default function Delays() {
	return (
		<HoverCard
			openDelay={200}
			closeDelay={200}
		>
			<HoverCard.Trigger asChild>
				<Button
					size="sm"
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
							<Surface.Content
								p="8"
								gap="12"
								direction="row"
							>
								<Avatar>
									<Avatar.Image src="https://images.pexels.com/photos/14001838/pexels-photo-14001838.jpeg?w=96&h=96" />
									<Avatar.Fallback>Sj</Avatar.Fallback>
								</Avatar>
								<Surface.Addon gap="4">
									<Surface.Title fontSize="14">Scarlett johanson</Surface.Title>
									<Surface.Description fontSize="14">
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
	);
}
