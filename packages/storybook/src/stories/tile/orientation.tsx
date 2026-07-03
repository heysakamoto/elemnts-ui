import { Container, Icon, Separator, Surface, Tile } from "@moto-ui/react";
import { Fragment, useState } from "react";

import preview from "@.storybook/preview";

const options = [
	{
		value: "rounded",
		title: "Rounded",
		icon: "tabler:border-corner-pill",
		description:
			"Gentle corners between 16–24px creating suited looks for interfaces.",
	},
	{
		value: "pill",
		title: "Pill",
		icon: "tabler:border-corner-rounded",
		description:
			"Completely rounded forms with a fun, consumer-oriented aesthetic.",
	},
];

const meta = preview.meta({
	title: "Orientation",
	component: Tile,
});

export const Orientation = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Tiles can be oriented horizontally or vertically.",
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
									gap="12"
									surface="tertiary"
									variant="secondary"
									colorPalette="neutral"
									orientation="horizontal"
									{...args}
									selected={option.value === value}
									onClick={() => setValue(option.value)}
								>
									<Tile.Indicator>
										<Icon
											icon={option.icon}
											width={20}
											height={20}
										/>
									</Tile.Indicator>
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
