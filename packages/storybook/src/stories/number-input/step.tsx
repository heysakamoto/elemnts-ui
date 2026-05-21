import preview from "@.storybook/preview";
import {
	Button,
	Container,
	Icon,
	InputGroup,
	NumberInput,
} from "@moto-ui/react";

const meta = preview.meta({
	title: "Step",
	component: NumberInput,
});

export const Step = meta.story({
	args: {
		step: 0.5,
	},
	parameters: {
		docs: {
			description: {
				story: "Use the `step` prop to change the increment/decrement amount.",
			},
		},
	},
	render: (args) => {
		return (
			<Container maxW="14rem">
				<NumberInput.Root
					defaultValue="1.5"
					{...args}
				>
					<NumberInput.Label>Amount (Step 0.5)</NumberInput.Label>
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
	},
});
