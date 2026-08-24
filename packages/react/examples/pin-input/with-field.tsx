import { Container, Field, Input, PinInput, Stack } from "@moto-ui/react";

export default function WithField() {
	return (
		<Container maxW="20rem">
			<Stack
				gap="12"
				width="100%"
				justify="center"
			>
				<Field.Root>
					<Field.Label>One Time Password</Field.Label>
					<PinInput>
						<PinInput.Control justifyContent="start">
							{Array.from({ length: 4 }).map((_, idx) => (
								<PinInput.Input
									asChild
									key={idx.toString()}
									index={idx}
								>
									<Input
										variant="secondary"
										boxSize="2.4rem"
										fontSize="20"
									/>
								</PinInput.Input>
							))}
						</PinInput.Control>
					</PinInput>
					<Field.HelperText></Field.HelperText>
				</Field.Root>
			</Stack>
		</Container>
	);
}
