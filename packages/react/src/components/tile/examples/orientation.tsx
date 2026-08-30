import { Container, For, Icon, Stack, Tile } from "@moto-ui/react";
import { useState } from "react";

export default function Orientation() {
	const [value, setValue] = useState("");

	return (
		<Container
			maxW="24rem"
			spaceY="8"
		>
			<Stack gap="8">
				<For each={options}>
					{(option, idx) => {
						const key = idx.toString();

						return (
							<Tile
								key={key}
								variant="secondary"
								orientation="vertical"
								selected={option.value === value}
								onClick={() => setValue(option.value)}
							>
								<Tile.Indicator>
									<Icon
										icon={option.icon}
										width={16}
										height={16}
									/>
								</Tile.Indicator>
								<Tile.Content>
									<Tile.Title>{option.title}</Tile.Title>
									<Tile.Description>{option.description}</Tile.Description>
								</Tile.Content>
							</Tile>
						);
					}}
				</For>
			</Stack>
		</Container>
	);
}

const options = [
	{
		value: "free",
		title: "Free",
		icon: "tabler:asterisk",
		description: "0USD forever",
	},
	{
		value: "plus",
		title: "Plus",
		icon: "tabler:jewish-star",
		description: "5USD billed monthly",
	},
];
