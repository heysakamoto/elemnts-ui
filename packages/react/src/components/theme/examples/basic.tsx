import {
	ButtonGroup,
	Container,
	Show,
	Surface,
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
					<Surface.Description fontSize="14">
						A toggleable color scheme wrapper.
					</Surface.Description>
				</Surface>
				<ButtonGroup
					mt="12"
					fullWidth
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
