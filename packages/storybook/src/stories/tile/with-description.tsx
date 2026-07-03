import { Checkmark, Icon, Tile } from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "With Description",
	component: Tile,
});

export const WithDescription = meta.story({
	parameters: {
		docs: {
			description: {
				story: "You can add a description to provide more context to the Tile.",
			},
		},
	},
	render: (args) => {
		const [selected, setSelected] = useState(false);

		return (
			<Tile
				{...args}
				gap="8"
				align="start"
				selected={args.selected ?? selected}
				variant="secondary"
				colorPalette="neutral"
				orientation="horizontal"
				rounded="24"
			>
				<Tile.Control color="icon.secondary">
					<Checkmark
						checked={selected}
						onClick={() => setSelected(!selected)}
					>
						<Icon
							icon="tabler:check"
							width={12}
							height={12}
						/>
					</Checkmark>
				</Tile.Control>
				<Tile.Content>
					<Tile.Title>Email Notifications</Tile.Title>
					<Tile.Description>
						Receive emails about your account activity
					</Tile.Description>
				</Tile.Content>
			</Tile>
		);
	},
});
