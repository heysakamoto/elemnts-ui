import preview from "@.storybook/preview";
import { Container, Field, Input, PinInput, Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "With Field",
	component: PinInput,
});

export const WithField = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `PinInput` can be used within a `Field` component to provide a label, helper text, and validation states.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<Stack
				gap="12"
				width="100%"
				justify="center"
			>
				<Field.Root>
					<Field.Label>One Time Password</Field.Label>
					<PinInput {...args}>
						<PinInput.Control justifyContent="start">
							{Array.from({ length: args.count ?? 4 }).map((_, idx) => (
								<PinInput.Input
									asChild
									key={idx.toString()}
									index={idx}
								>
									<Input
										variant="secondary"
										boxSize="2.4rem"
										fontSize="20"
									/>
								</PinInput.Input>
							))}
						</PinInput.Control>
					</PinInput>
					<Field.HelperText />
				</Field.Root>
			</Stack>
		</Container>
	),
});
