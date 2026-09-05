import { Button, Presence, Stack, Surface } from "@elemnts-ui/react";
import { useState } from "react";

export default function LazyMount() {
	const [present, setPresent] = useState(false);

	return (
		<Stack gap="8" align="center" direction="column">
			<Button variant="surface" onClick={() => setPresent(!present)}>
				{present ? "Unmount" : "Mount"}
			</Button>
			<Presence lazyMount present={present} unmountOnExit>
				<Surface delta={1} px="12" py="8">
					<Surface.Title fontSize="14">
						This element is lazy mounted.
					</Surface.Title>
				</Surface>
			</Presence>
		</Stack>
	);
}
