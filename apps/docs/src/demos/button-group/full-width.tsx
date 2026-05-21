import { ButtonGroup, Container, Stack } from "@moto-ui/react";

export function FullWidth() {
	return (
		<Container maxW="16rem">
			<Stack
				direction="column"
				gap="16"
				align="center"
			>
				<ButtonGroup
					fullWidth
					attached
					variant="surface"
				>
					<ButtonGroup.Item roundedStart="24">
						Fix error
						<ButtonGroup.Separator />
					</ButtonGroup.Item>
					<ButtonGroup.Item roundedEnd="24">Ignore</ButtonGroup.Item>
				</ButtonGroup>
			</Stack>
		</Container>
	);
}
