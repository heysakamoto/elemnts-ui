import preview from "@.storybook/preview";
import {
	Button,
	Clipboard,
	Container,
	Group,
	Icon,
	Input,
} from "@moto-ui/react";

const meta = preview.meta({
	title: "With Input",
	component: Clipboard,
});

export const WithInput = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use Clipboard.Input to render an input field that contains the text to be copied.",
			},
		},
	},
	render: (args) => (
		<Container maxW="16rem">
			<Clipboard {...args}>
				<Group attached>
					<Clipboard.Input asChild>
						<Input
							px="8"
							fontSize="14"
							roundedStart="24"
						/>
					</Clipboard.Input>
					<Clipboard.Trigger asChild>
						<Button
							size="md"
							roundedEnd="24"
							variant="tertiary"
						>
							<Clipboard.Indicator
								ml="-2"
								copied={
									<Icon
										icon="tabler:check"
										width={16}
										height={16}
									/>
								}
							>
								<Icon
									icon="tabler:copy"
									width={16}
									height={16}
								/>
							</Clipboard.Indicator>
						</Button>
					</Clipboard.Trigger>
				</Group>
			</Clipboard>
		</Container>
	),
});
