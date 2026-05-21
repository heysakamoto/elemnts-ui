import {
	Button,
	Container,
	Icon,
	InputGroup,
	NumberInput,
} from "@moto-ui/react";

export const Basic = () => {
	return (
		<Container maxW="14rem">
			<NumberInput.Root defaultValue="10">
				<InputGroup rounded="24">
					<NumberInput.Control
						gap="4"
						pl="6"
					>
						<NumberInput.DecrementTrigger asChild>
							<Button
								iconOnly
								variant="surface"
								size="xs"
							>
								<Icon
									icon="tabler:minus"
									width={16}
									height={16}
								/>
							</Button>
						</NumberInput.DecrementTrigger>
						<NumberInput.IncrementTrigger asChild>
							<Button
								iconOnly
								variant="surface"
								size="xs"
							>
								<Icon
									icon="tabler:plus"
									width={16}
									height={16}
								/>
							</Button>
						</NumberInput.IncrementTrigger>
					</NumberInput.Control>
					<NumberInput.Input asChild>
						<InputGroup.Input
							px="8"
							textAlign="right"
						/>
					</NumberInput.Input>
				</InputGroup>
			</NumberInput.Root>
		</Container>
	);
};
