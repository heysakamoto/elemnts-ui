import { ColorScheme, Container, Stack, Surface, Text } from "@moto-ui/react";

export function Forced() {
	return (
		<Container maxW="20rem">
			<Stack
				gap="12"
				direction="column"
			>
				<ColorScheme.Dark>
					<Surface
						p="12"
						delta={5}
						rounded="16"
					>
						<Text fontSize="14">Forced dark scheme</Text>
					</Surface>
				</ColorScheme.Dark>
				<ColorScheme.Light>
					<Surface
						p="12"
						delta={5}
						rounded="16"
					>
						<Text fontSize="14">Forced light scheme</Text>
					</Surface>
				</ColorScheme.Light>
			</Stack>
		</Container>
	);
}
