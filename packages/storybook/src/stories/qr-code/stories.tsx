import preview from "@.storybook/preview";
import { QrCode } from "@moto-ui/react";

const meta = preview.meta({
	tags: ["autodocs"],
	component: QrCode,
	title: "Data Display/QrCode",
	args: {
		value: "https://www.mobbin.com",
	},
	parameters: {
		docs: {
			description: {
				component: "A component that creates a QR code from the supplied data.",
			},
		},
	},
});

export default meta;

export { Basic } from "./basic";
export { Download } from "./download";
export { Fill } from "./fill";
export { LogoOverlay } from "./logo-overlay";
