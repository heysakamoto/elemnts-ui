import { ColorTheme, Container, Stack, Surface, Text } from "@moto-ui/react";

export default function Forced() {
	return (
		<Container maxW="24rem">
			<Stack
				gap="12"
				direction="column"
			>
				<ColorTheme.Scope theme="dark">
					<Surface
						p="12"
						delta={5}
						rounded="10"
					>
						<Text
							fontSize="14"
							color="fg.primary"
						>
							Forced dark scheme
						</Text>
					</Surface>
				</ColorTheme.Scope>
				<ColorTheme.Scope theme="light">
					<Surface
						p="12"
						delta={5}
						rounded="10"
					>
						<Text
							fontSize="14"
							color="fg.primary"
						>
							Forced light scheme
						</Text>
					</Surface>
				</ColorTheme.Scope>
			</Stack>
		</Container>
	);
}
