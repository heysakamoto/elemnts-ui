import preview from "@.storybook/preview";
import { Button, Presence, Stack, Surface } from "@moto-ui/react";
import { useState } from "react";

const meta = preview.meta({
	title: "Lazy Mount",
	component: Presence,
});

export const LazyMount = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `lazyMount` prop to defer rendering the component until the first time `present` is true.",
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
					lazyMount
					present={present}
					unmountOnExit
				>
					<Surface
						delta={1}
						p="8"
					>
						<Surface.Title fontSize="14">
							This element is lazy mounted.
						</Surface.Title>
					</Surface>
				</Presence>
			</Stack>
		);
	},
});
