import { Input, PinInput } from "@moto-ui/react";

export default function Masking() {
	return (
		<PinInput masked>
			<PinInput.Control>
				{Array.from({ length: 4 }).map((_, idx) => (
					<PinInput.Input
						asChild
						index={idx}
						key={idx.toString()}
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
	);
}
