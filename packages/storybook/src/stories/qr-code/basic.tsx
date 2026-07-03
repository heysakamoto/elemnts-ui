import { QrCode } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: QrCode,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use QrCode to render a scannable QR code from any string (for example, a URL or identifier). Provide the data you want to encode, and the component will generate the QR image.",
			},
		},
	},
	render: (args) => (
		<QrCode.Root {...args}>
			<QrCode.Frame>
				<QrCode.Pattern />
			</QrCode.Frame>
		</QrCode.Root>
	),
});
