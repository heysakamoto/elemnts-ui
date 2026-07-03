import { Icon, QrCode } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Logo Overlay",
	component: QrCode,
});

export const LogoOverlay = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Add logo or badge on top of the QR by rendering it inside QrCode.Overlay.",
			},
		},
	},
	render: (args) => (
		<QrCode.Root {...args}>
			<QrCode.Frame>
				<QrCode.Pattern />
			</QrCode.Frame>
			<QrCode.Overlay>
				<Icon
					icon="logos:apple"
					width={24}
					height={24}
				/>
			</QrCode.Overlay>
		</QrCode.Root>
	),
});
