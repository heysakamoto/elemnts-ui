import { Container, Field, Fieldset, Input, Stack } from "@elemnts-ui/react";

export default function Disabled() {
	return (
		<Container maxW="24rem">
			<Fieldset disabled>
				<Fieldset.Legend>Contact Details</Fieldset.Legend>
				<Fieldset.HelperText>
					Please provide your contact information.
				</Fieldset.HelperText>
				<Stack mt="12" gap="12" direction="column">
					<Field>
						<Field.Label>Name</Field.Label>
						<Input placeholder="John Doe" />
					</Field>
					<Field>
						<Field.Label>Email</Field.Label>
						<Input type="email" placeholder="john@example.com" />
					</Field>
				</Stack>
			</Fieldset>
		</Container>
	);
}
