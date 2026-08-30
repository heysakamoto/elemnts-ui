import { Button, Presence, Stack, Surface } from "@moto-ui/react";
import { useState } from "react";

export default function Basic() {
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
}
