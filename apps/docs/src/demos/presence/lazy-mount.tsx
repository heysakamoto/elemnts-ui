import { Button, Presence, Stack, Surface } from "@moto-ui/react";
import { useState } from "react";

export function LazyMount() {
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
}
