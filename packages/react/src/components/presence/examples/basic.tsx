import { Button, Presence, Stack, Surface } from "@elemnts-ui/react";
import { useState } from "react";

export default function Basic() {
	const [present, setPresent] = useState(false);

	return (
		<Stack gap="8" align="center" direction="column">
			<Button variant="surface" onClick={() => setPresent(!present)}>
				Toggle
			</Button>
			<Presence present={present}>
				<Surface delta={1} px="12" py="8">
					<Surface.Title fontSize="14">
						The content is rendered when present is true.
					</Surface.Title>
				</Surface>
			</Presence>
		</Stack>
	);
}
