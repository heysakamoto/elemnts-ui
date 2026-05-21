import { Avatar, Container, Surface } from "@moto-ui/react";

export function Basic() {
	return (
		<Container maxW="20rem">
			<Surface
				delta={1}
				py="16"
				rounded="24"
			>
				<Surface.Header>
					<Avatar>
						<Avatar.Image src="https://images.pexels.com/photos/9775435/pexels-photo-9775435.jpeg?w=160&h=160" />
						<Avatar.Fallback fontSize="14">Sd</Avatar.Fallback>
					</Avatar>
				</Surface.Header>
				<Surface.Content
					px="16"
					mt="16"
				>
					<Surface.Title
						justify="center"
						letterSpacing="xs"
					>
						Sinclair druke is now a friend
					</Surface.Title>
					<Surface.Description
						mt="8"
						fontSize="14"
						textAlign="center"
						letterSpacing="sm"
					>
						Daniel, you now have a friend, check out your new friend profile or
						send a message!
					</Surface.Description>
				</Surface.Content>
			</Surface>
		</Container>
	);
}
