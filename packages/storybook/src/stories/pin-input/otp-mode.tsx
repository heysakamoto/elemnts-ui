import { Input, PinInput } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "OTP Mode",
	component: PinInput,
});

export const OTPMode = meta.story({
	args: {
		otp: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `otp` prop to signal to mobile devices that the input is a one-time password, enabling auto-fill features.",
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
