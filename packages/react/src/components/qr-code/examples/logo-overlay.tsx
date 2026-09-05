import { Icon, QrCode } from "@elemnts-ui/react";

export default function LogoOverlay() {
	return (
		<QrCode.Root value="https://www.mobbin.com">
			<QrCode.Frame>
				<QrCode.Pattern />
			</QrCode.Frame>
			<QrCode.Overlay>
				<Icon icon="logos:apple" width={24} height={24} />
			</QrCode.Overlay>
		</QrCode.Root>
	);
}
