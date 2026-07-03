import {
	Button,
	Container,
	Icon,
	InputGroup,
	NumberInput,
} from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Min and Max",
	component: NumberInput,
});

export const MinMax = meta.story({
	args: {
		min: 0,
		max: 20,
	},
	parameters: {
		docs: {
			description: {
				story: "Use the `min` and `max` props to restrict the range of values.",
			},
		},
	},
	render: (args) => {
		return (
			<Container maxW="14rem">
				<NumberInput.Root
					defaultValue="5"
					{...args}
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
	},
});
