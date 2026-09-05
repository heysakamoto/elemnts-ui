import { QrCode } from "@elemnts-ui/react";

export default function Fill() {
	return (
		<QrCode.Root value="https://www.mobbin.com">
			<QrCode.Frame>
				<QrCode.Pattern fill="destructive.primary" />
			</QrCode.Frame>
		</QrCode.Root>
	);
}
