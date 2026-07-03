import {
	Button,
	Container,
	Group,
	Icon,
	Input,
	NumberInput,
} from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Scrubber",
	component: NumberInput,
});

export const Scrubber = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `NumberInput.Scrubber` allows users to change the value by clicking and dragging.",
			},
		},
	},
	render: (args) => {
		return (
			<Container maxW="14rem">
				<NumberInput.Root
					defaultValue="50"
					{...args}
				>
					<Group attached>
						<NumberInput.Scrubber asChild>
							<Button
								iconOnly
								size="md"
								flexShrink="0"
								roundedStart="24"
								variant="surface"
							>
								<Icon
									ml="-2"
									width={16}
									height={16}
									icon="tabler:arrow-bar-both"
								/>
							</Button>
						</NumberInput.Scrubber>
						<NumberInput.Input asChild>
							<Input
								textAlign="right"
								roundedEnd="24"
							/>
						</NumberInput.Input>
					</Group>
				</NumberInput.Root>
			</Container>
		);
	},
});
