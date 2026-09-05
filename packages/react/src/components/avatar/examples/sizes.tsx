import { Avatar, Container, For, Stack } from "@elemnts-ui/react";

const sizes = ["xl", "lg", "md", "sm", "xs"] as const;

export default function Sizes() {
	return (
		<Container>
			<Stack gap="8" align="center" justify="center">
				<For each={sizes}>
					{(size) => (
						<Avatar size={size} key={size}>
							<Avatar.Image
								src="https://images.pexels.com/photos/12698114/pexels-photo-12698114.jpeg?w=200&h=200"
								alt={`img-${size}`}
							/>
							<Avatar.Fallback fontSize="13">M</Avatar.Fallback>
						</Avatar>
					)}
				</For>
			</Stack>
		</Container>
	);
}
