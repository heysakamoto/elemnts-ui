import {
	Button,
	Container,
	Group,
	Icon,
	Input,
	PasswordInput,
} from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: PasswordInput,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The PasswordInput component is a compound component that provides a secure way to enter passwords, with built-in support for toggling visibility.",
			},
		},
	},
	render: (args) => (
		<Container maxW="16rem">
			<PasswordInput.Root
				width="full"
				maxWidth="xs"
				{...args}
			>
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
		</Container>
	),
});
