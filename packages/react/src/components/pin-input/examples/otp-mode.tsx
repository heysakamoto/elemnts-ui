import { Container, Input, PinInput } from "@moto-ui/react";

export default function OTPMode() {
	return (
		<Container maxW="14rem">
			<PinInput otp>
				<PinInput.Control>
					{Array.from({ length: 4 }).map((_, idx) => (
						<PinInput.Input
							asChild
							index={idx}
							key={idx.toString()}
						>
							<Input fontSize="20" />
						</PinInput.Input>
					))}
				</PinInput.Control>
			</PinInput>
		</Container>
	);
}
