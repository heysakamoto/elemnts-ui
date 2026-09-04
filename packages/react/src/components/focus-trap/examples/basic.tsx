import {
	Button,
	Container,
	Field,
	FocusTrap,
	Group,
	Input,
} from "@moto-ui/react";
import { useState } from "react";

export default function Basic() {
	const [active, setActive] = useState(false);

	return (
		<Container maxW="28rem">
			<Field>
				<Group>
					<Button
						variant="surface"
						onClick={() => setActive(!active)}
					>
						{active ? "Release" : "Trap"}
					</Button>
					<FocusTrap disabled={!active}>
						<Field.Input asChild>
							<Input placeholder="Type here..." />
						</Field.Input>
					</FocusTrap>
				</Group>
			</Field>
		</Container>
	);
}
