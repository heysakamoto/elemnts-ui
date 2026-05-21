import { Container, Separator, Surface, Tile } from "@moto-ui/react";
import { Fragment, useState } from "react";

export function Variants() {
	const [value, setValue] = useState("");

	return (
		<Container maxW="20rem">
			<Surface
				delta={1}
				rounded="24"
				shadowLevel={0}
			>
				{options.map((option, idx) => {
					const key = idx.toString();
					const isLastChild = options.length === idx + 1;

					return (
						<Fragment key={key}>
							<Tile
								tone="tertiary"
								variant="primary"
								colorPalette="neutral"
								selected={option.value === value}
								onClick={() => setValue(option.value)}
							>
								<Tile.Content>
									<Tile.Title fontSize="13">{option.title}</Tile.Title>
									<Tile.Description>{option.description}</Tile.Description>
								</Tile.Content>
							</Tile>
							{!isLastChild && (
								<Separator
									variant="tertiary"
									orientation="horizontal"
								/>
							)}
						</Fragment>
					);
				})}
			</Surface>
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
