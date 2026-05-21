import preview from "@.storybook/preview";
import { QrCode } from "@moto-ui/react";

const meta = preview.meta({
	title: "Fill",
	component: QrCode,
});

export const Fill = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the QR code’s color by applying style props to QrCode.Pattern.",
			},
		},
	},
	render: (args) => (
		<QrCode.Root {...args}>
			<QrCode.Frame>
				<QrCode.Pattern fill="destructive.primary" />
			</QrCode.Frame>
		</QrCode.Root>
	),
});
