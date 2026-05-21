import { Avatar, Container, Stack } from "@moto-ui/react";

export function Colors() {
	return (
		<Container>
			<Stack
				direction="row"
				gap="16"
				justify="center"
			>
				<Avatar colorPalette="accent">
					<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
				</Avatar>
				<Avatar colorPalette="neutral">
					<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
				</Avatar>
				<Avatar colorPalette="success">
					<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
				</Avatar>
			</Stack>
		</Container>
	);
}
