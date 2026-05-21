import { Button, QrCode } from "@moto-ui/react";

export function Download() {
	return (
		<QrCode.Root
			align="center"
			value="https://www.mobbin.com"
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
	);
}
