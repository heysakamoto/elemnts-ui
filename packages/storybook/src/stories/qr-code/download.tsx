import { Button, QrCode } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Download",
	component: QrCode,
});

export const Download = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Allow users to download the QR code as an image using QrCode.DownloadTrigger.",
			},
		},
	},
	render: (args) => (
		<QrCode.Root
			align="center"
			{...args}
		>
			<QrCode.Frame>
				<QrCode.Pattern />
			</QrCode.Frame>
			<QrCode.DownloadTrigger
				asChild
				fileName="qrcode.png"
				mimeType="image/png"
			>
				<Button
					mt="12"
					variant="surface"
					size="sm"
				>
					Download
				</Button>
			</QrCode.DownloadTrigger>
		</QrCode.Root>
	),
});
