import { QrCode } from "@moto-ui/react";

export function Basic() {
	return (
		<QrCode.Root value="https://www.mobbin.com">
			<QrCode.Frame>
				<QrCode.Pattern />
			</QrCode.Frame>
		</QrCode.Root>
	);
}
