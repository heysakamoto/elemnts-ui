import {
	Button,
	Container,
	Field,
	FocusTrap,
	Group,
	Input,
} from "@moto-ui/react";
import { useState } from "react";

export function Basic() {
	const [active, setActive] = useState(false);

	return (
		<Container maxW="20rem">
			<Field>
				<Group gap="4">
					<Button
						rounded="24"
						flexShrink="0"
						variant="surface"
						onClick={() => setActive(!active)}
					>
						{active ? "Release" : "Trap"}
					</Button>
					<FocusTrap disabled={!active}>
						<Input
							rounded="24"
							placeholder="Type here..."
						/>
					</FocusTrap>
				</Group>
				<Field.HelperText>
					When the focus trap is active, tabbing through interactive elements
					will cycle within this panel.
				</Field.HelperText>
			</Field>
		</Container>
	);
}
