import {
	Button,
	Clipboard,
	Container,
	Group,
	Icon,
	Input,
} from "@moto-ui/react";

export function WithInput() {
	return (
		<Container maxW="16rem">
			<Clipboard value="Lorem ipsum dolor sit.">
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
	);
}
