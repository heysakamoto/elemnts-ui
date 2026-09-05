import {
	Button,
	Container,
	Group,
	Icon,
	Input,
	PasswordInput,
} from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Container maxW="24rem">
			<PasswordInput.Root w="full">
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
										<Icon icon="tabler:eye-off" width={16} height={16} />
									}
								>
									<Icon icon="tabler:eye" width={16} height={16} />
								</PasswordInput.Indicator>
							</Button>
						</PasswordInput.VisibilityTrigger>
					</Group>
				</PasswordInput.Control>
			</PasswordInput.Root>
		</Container>
	);
}
