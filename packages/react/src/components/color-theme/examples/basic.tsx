import {
	ButtonGroup,
	ColorTheme,
	Container,
	Stack,
	Surface,
	Text,
	useColorThemeContext,
} from "@moto-ui/react";

type Theme = "light" | "dark" | "system";

const Themes: Theme[] = ["light", "dark", "system"];

export default function Basic() {
	return (
		<Container maxW="24rem">
			<ColorTheme defaultTheme="light">
				<Stack
					gap="12"
					direction="column"
				>
					<Surface
						delta={5}
						p="12"
						rounded="10"
					>
						<Text fontSize="14">A toggleable color Theme provider.</Text>
					</Surface>
					<ThemeButtons />
				</Stack>
			</ColorTheme>
		</Container>
	);
}

function ThemeButtons() {
	const { theme, onThemeChange } = useColorThemeContext();

	return (
		<ButtonGroup fullWidth>
			{Themes.map((Theme) => (
				<ButtonGroup.Item
					key={Theme}
					onClick={() => onThemeChange(Theme)}
					variant={theme === Theme ? "primary" : "ghost"}
				>
					{Theme.charAt(0).toUpperCase() + Theme.slice(1)}
				</ButtonGroup.Item>
			))}
		</ButtonGroup>
	);
}
