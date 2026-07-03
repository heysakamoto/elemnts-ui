import { Button, Presence, Stack, Surface } from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Presence,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story: "The basic usage of the `Presence` component.",
			},
		},
	},
	render: () => {
		const [present, setPresent] = useState(false);

		return (
			<Stack
				gap="4"
				align="center"
				direction="column"
			>
				<Button
					rounded="24"
					variant="surface"
					onClick={() => setPresent(!present)}
				>
					Toggle
				</Button>
				<Presence present={present}>
					<Surface
						delta={1}
						p="8"
					>
						<Surface.Title fontSize="14">
							The content is rendered when present is true.
						</Surface.Title>
					</Surface>
				</Presence>
			</Stack>
		);
	},
});
