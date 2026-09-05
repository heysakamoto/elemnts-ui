import { QrCode } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<QrCode.Root value="https://www.mobbin.com">
			<QrCode.Frame>
				<QrCode.Pattern />
			</QrCode.Frame>
		</QrCode.Root>
	);
}
