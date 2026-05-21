import {
	Button,
	Container,
	Icon,
	InputGroup,
	NumberInput,
} from "@moto-ui/react";

export const MinMax = () => {
	return (
		<Container maxW="14rem">
			<NumberInput.Root
				min={0}
				max={20}
				defaultValue="5"
			>
				<NumberInput.Label>Score (0-20)</NumberInput.Label>
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
