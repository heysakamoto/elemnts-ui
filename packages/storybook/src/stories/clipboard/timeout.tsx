import preview from "@.storybook/preview";
import { Button, Clipboard, Container, Icon, InputGroup } from "@moto-ui/react";

const meta = preview.meta({
	title: "Timeout",
	component: Clipboard,
});

export const Timeout = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Control how long the copied state remains active before resetting by configuring a timeout.",
			},
		},
	},
	render: (args) => (
		<Container maxW="16rem">
			<Clipboard
				{...args}
				value="Change the duration."
				timeout={1000}
			>
				<InputGroup
					size="sm"
					rounded="24"
				>
					<Clipboard.Input asChild>
						<InputGroup.Input
							fontSize="14"
							px="8"
						/>
					</Clipboard.Input>
					<InputGroup.Addon p="1">
						<Clipboard.Trigger asChild>
							<Button
								size="sm"
								variant="surface"
								rounded="calc(24px - 1px)"
							>
								<Clipboard.Indicator
									ml="-2"
									copied={
										<Icon
											icon="tabler:check"
											width={18}
											height={18}
										/>
									}
								>
									<Icon
										icon="tabler:copy"
										width={18}
										height={18}
									/>
								</Clipboard.Indicator>
								{" Copy"}
							</Button>
						</Clipboard.Trigger>
					</InputGroup.Addon>
				</InputGroup>
			</Clipboard>
		</Container>
	),
});
