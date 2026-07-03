import {
	ButtonGroup,
	ColorScheme,
	Container,
	Stack,
	Surface,
	Text,
	useColorSchemeContext,
} from "@moto-ui/react";

type Scheme = "light" | "dark" | "system";

const schemes: Scheme[] = ["light", "dark", "system"];

export function Basic() {
	return (
		<Container maxW="20rem">
			<ColorScheme defaultScheme="light">
				<Stack
					gap="12"
					direction="column"
				>
					<Surface
						delta={5}
						p="12"
						rounded="16"
					>
						<Text fontSize="14">A toggleable color scheme provider.</Text>
					</Surface>
					<SchemeButtons />
				</Stack>
			</ColorScheme>
		</Container>
	);
}

function SchemeButtons() {
	const { colorScheme, onColorSchemeChange } = useColorSchemeContext();

	return (
		<ButtonGroup
			gap="8"
			fullWidth
		>
			{schemes.map((scheme) => (
				<ButtonGroup.Item
					key={scheme}
					onClick={() => onColorSchemeChange(scheme)}
					variant={colorScheme === scheme ? "primary" : "ghost"}
				>
					{scheme.charAt(0).toUpperCase() + scheme.slice(1)}
				</ButtonGroup.Item>
			))}
		</ButtonGroup>
	);
}
