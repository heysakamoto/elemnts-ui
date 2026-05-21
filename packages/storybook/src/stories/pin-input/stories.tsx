import preview from "@.storybook/preview";
import { PinInput } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: PinInput,
	title: "Forms/PinInput",
	args: {
		count: 4,
	},
	parameters: {
		docs: {
			description: {
				component: "For optimized user experience of entering a PIN or OTP.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Masking } from "./masking";
export { OTPMode } from "./otp-mode";
export { WithField } from "./with-field";
