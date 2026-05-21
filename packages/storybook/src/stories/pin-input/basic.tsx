import preview from "@.storybook/preview";
import { Input, PinInput } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: PinInput,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `PinInput` component is a compound component that provides an optimized experience for entering multi-digit codes like PINs or One-Time Passwords (OTPs).",
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
