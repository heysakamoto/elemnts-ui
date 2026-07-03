import {
	Button,
	Container,
	Icon,
	InputGroup,
	NumberInput,
} from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: NumberInput,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `NumberInput` component is a compound component that provides a way to enter and adjust numerical values.",
			},
		},
	},
	render: (args) => {
		return (
			<Container maxW="14rem">
				<NumberInput.Root
					defaultValue="10"
					{...args}
				>
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
