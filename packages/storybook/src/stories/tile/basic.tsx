import { Container, Separator, Surface, Tile } from "@moto-ui/react";
import { Fragment, useState } from "react";

import preview from "@.storybook/preview";

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

const meta = preview.meta({
	title: "Basic",
	component: Tile,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Tile component is used to present information or options in a structured, visually distinct container. It supports compound components for flexible layout.",
			},
		},
	},
	render: (args) => {
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
									surface="tertiary"
									variant="secondary"
									colorPalette="neutral"
									{...args}
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
	},
});
