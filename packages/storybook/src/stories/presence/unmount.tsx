import { Button, Presence, Stack, Surface } from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Unmount",
	component: Presence,
});

export const Unmount = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `unmountOnExit` prop to completely remove the component from the DOM when it's not present.",
			},
		},
	},
	render: () => {
		const [present, setPresent] = useState(false);

		return (
			<Stack
				gap="8"
				align="center"
				direction="column"
			>
				<Button
					rounded="24"
					variant="surface"
					onClick={() => setPresent(!present)}
				>
					{present ? "Unmount" : "Mount"}
				</Button>
				<Presence
					present={present}
					unmountOnExit
				>
					<Surface
						delta={1}
						p="8"
					>
						<Surface.Title fontSize="14">
							This element is removed from DOM when hidden
						</Surface.Title>
					</Surface>
				</Presence>
			</Stack>
		);
	},
});
