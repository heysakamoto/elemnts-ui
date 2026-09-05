import { Button, Presence, Stack, Surface } from "@elemnts-ui/react";
import { useState } from "react";

export default function Unmount() {
	const [present, setPresent] = useState(false);

	return (
		<Stack gap="8" align="center" direction="column">
			<Button variant="surface" onClick={() => setPresent(!present)}>
				{present ? "Unmount" : "Mount"}
			</Button>
			<Presence present={present} unmountOnExit>
				<Surface delta={1} px="12" py="8">
					<Surface.Title fontSize="14">
						This element is removed from DOM when hidden
					</Surface.Title>
				</Surface>
			</Presence>
		</Stack>
	);
}
