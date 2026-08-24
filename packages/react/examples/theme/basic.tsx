import {
	ButtonGroup,
	Container,
	Show,
	Surface,
	Text,
	Theme,
	type ThemeProps,
} from "@moto-ui/react";
import { useState } from "react";

type Appearance = ThemeProps["appearance"];
const appearances = ["light", "dark"] as Array<Appearance>;

export default function Basic() {
	const [value, setValue] = useState<Appearance>("light");

	return (
		<Container maxW="20rem">
			<Theme appearance={value}>
				<Surface
					p="12"
					delta={5}
					rounded="16"
				>
					<Text fontSize="14">A toggleable color scheme wrapper.</Text>
				</Surface>
				<ButtonGroup
					mt="12"
					gap="8"
					fullWidth
					direction="row"
					justify="center"
				>
					{appearances.map((appearance) => (
						<ButtonGroup.Item
							key={appearance}
							onClick={() => setValue(appearance)}
							variant={appearance === value ? "primary" : "ghost"}
						>
							<Show when={appearance}>
								{(label) => label.charAt(0).toUpperCase() + label.slice(1)}
							</Show>
						</ButtonGroup.Item>
					))}
				</ButtonGroup>
			</Theme>
		</Container>
	);
}
