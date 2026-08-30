import {
	Button,
	Container,
	Icon,
	InputGroup,
	NumberInput,
} from "@moto-ui/react";

export default function Basic() {
	return (
		<Container maxW="14rem">
			<NumberInput.Root defaultValue="10">
				<NumberInput.Control>
					<NumberInput.DecrementTrigger asChild>
						<Button
							iconOnly
							variant="surface"
						>
							<Icon
								icon="tabler:minus"
								width={16}
								height={16}
							/>
						</Button>
					</NumberInput.DecrementTrigger>
					<InputGroup>
						<NumberInput.Input asChild>
							<InputGroup.Input
								fontSize="16"
								textAlign="center"
							/>
						</NumberInput.Input>
					</InputGroup>
					<NumberInput.IncrementTrigger asChild>
						<Button
							iconOnly
							variant="surface"
						>
							<Icon
								icon="tabler:plus"
								width={16}
								height={16}
							/>
						</Button>
					</NumberInput.IncrementTrigger>
				</NumberInput.Control>
			</NumberInput.Root>
		</Container>
	);
}
