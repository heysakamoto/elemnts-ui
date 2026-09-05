import {
	Button,
	Container,
	Icon,
	InputGroup,
	NumberInput,
} from "@elemnts-ui/react";

export default function MinMax() {
	return (
		<Container maxW="14rem">
			<NumberInput.Root min={0} max={20} defaultValue="5">
				<NumberInput.Control>
					<NumberInput.DecrementTrigger asChild>
						<Button iconOnly variant="surface">
							<Icon icon="tabler:minus" width={16} height={16} />
						</Button>
					</NumberInput.DecrementTrigger>
					<InputGroup>
						<NumberInput.Input asChild>
							<InputGroup.Input fontSize="16" textAlign="center" />
						</NumberInput.Input>
					</InputGroup>
					<NumberInput.IncrementTrigger asChild>
						<Button iconOnly variant="surface">
							<Icon icon="tabler:plus" width={16} height={16} />
						</Button>
					</NumberInput.IncrementTrigger>
				</NumberInput.Control>
			</NumberInput.Root>
		</Container>
	);
}
