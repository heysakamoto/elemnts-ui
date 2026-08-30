import {
	Button,
	Container,
	Field,
	Group,
	Icon,
	Input,
	PasswordInput,
} from "@moto-ui/react";

export default function WithField() {
	return (
		<Container maxW="24rem">
			<Field.Root>
				<Field.Label>Password</Field.Label>
				<PasswordInput.Root>
					<PasswordInput.Control>
						<Group w="full">
							<PasswordInput.Input asChild>
								<Input placeholder="Enter your password" />
							</PasswordInput.Input>
							<PasswordInput.VisibilityTrigger asChild>
								<Button
									iconOnly
									variant="tertiary"
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
	);
}
