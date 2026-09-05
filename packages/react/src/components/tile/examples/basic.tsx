import { Container, For, Tile } from "@elemnts-ui/react";
import { useState } from "react";

export default function Basic() {
	const [value, setValue] = useState("");

	return (
		<Container maxW="20rem" spaceY="8">
			<For each={options}>
				{(option, idx) => {
					const key = idx.toString();

					return (
						<Tile
							key={key}
							orientation="vertical"
							selected={option.value === value}
							onClick={() => setValue(option.value)}
						>
							<Tile.Title>{option.title}</Tile.Title>
							<Tile.Description>{option.description}</Tile.Description>
						</Tile>
					);
				}}
			</For>
		</Container>
	);
}

const options = [
	{
		value: "rounded",
		title: "Rounded",
		description:
			"Gentle corners between 16–24px creating suited looks for interfaces.",
	},
	{
		value: "pill",
		title: "Pill",
		description:
			"Completely rounded forms with a fun, consumer-oriented aesthetic.",
	},
];
