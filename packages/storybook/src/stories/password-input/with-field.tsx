import preview from "@.storybook/preview";
import {
	Button,
	Container,
	Field,
	Group,
	Icon,
	Input,
	PasswordInput,
} from "@moto-ui/react";

const meta = preview.meta({
	title: "With Field",
	component: PasswordInput,
});

export const WithField = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the PasswordInput within a Field component to provide a label, helper text, and validation states.",
			},
		},
	},
	render: (args) => (
		<Container maxW="16rem">
			<Field.Root>
				<Field.Label>Password</Field.Label>
				<PasswordInput.Root {...args}>
					<PasswordInput.Control>
						<Group attached>
							<PasswordInput.Input asChild>
								<Input
									px="8"
									fontSize="14"
									roundedStart="24"
									placeholder="Enter your password"
								/>
							</PasswordInput.Input>
							<PasswordInput.VisibilityTrigger asChild>
								<Button
									iconOnly
									size="md"
									roundedEnd="24"
									variant="tertiary"
									colorPalette="neutral"
									_notHover={{ color: "icon.secondary" }}
								>
									<PasswordInput.Indicator
										fallback={
											<Icon
												icon="tabler:eye-off"
												width={16}
												height={16}
											/>
										}
									>
										<Icon
											icon="tabler:eye"
											width={16}
											height={16}
										/>
									</PasswordInput.Indicator>
								</Button>
							</PasswordInput.VisibilityTrigger>
						</Group>
					</PasswordInput.Control>
				</PasswordInput.Root>
			</Field.Root>
		</Container>
	),
});
