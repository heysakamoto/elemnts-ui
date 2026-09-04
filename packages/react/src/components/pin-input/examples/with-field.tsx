import { Container, Field, Input, PinInput } from "@moto-ui/react";

export default function WithField() {
	return (
		<Container maxW="14rem">
			<Field>
				<PinInput>
					<PinInput.Control justifyContent="start">
						{Array.from({ length: 4 }).map((_, idx) => (
							<PinInput.Input
								asChild
								key={idx.toString()}
								index={idx}
							>
								<Input fontSize="20" />
							</PinInput.Input>
						))}
					</PinInput.Control>
				</PinInput>
				<Field.HelperText></Field.HelperText>
			</Field>
		</Container>
	);
}
