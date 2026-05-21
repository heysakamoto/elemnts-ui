import preview from "@.storybook/preview";
import { Input, PinInput } from "@moto-ui/react";

const meta = preview.meta({
	title: "Masking",
	component: PinInput,
});

export const Masking = meta.story({
	args: {
		mask: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `mask` prop to obscure the input values, similar to a password input.",
			},
		},
	},
	render: (args) => (
		<PinInput {...args}>
			<PinInput.Control>
				{Array.from({ length: args.count ?? 4 }).map((_, idx) => (
					<PinInput.Input
						asChild
						index={idx}
						key={idx.toString()}
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
	),
});
