import { Container, Input, PinInput } from "@elemnts-ui/react";

export default function Masking() {
	return (
		<Container maxW="14rem">
			<PinInput masked>
				<PinInput.Control>
					{Array.from({ length: 4 }).map((_, idx) => (
						<PinInput.Input asChild index={idx} key={idx.toString()}>
							<Input fontSize="20" />
						</PinInput.Input>
					))}
				</PinInput.Control>
			</PinInput>
		</Container>
	);
}
