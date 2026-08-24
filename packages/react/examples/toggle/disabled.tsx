import { Icon, Toggle } from "@moto-ui/react";

export default function Disabled() {
	return (
		<Toggle.Root
			disabled
			aria-label="Toggle underline"
		>
			<Icon
				icon="tabler:underline"
				width={16}
				height={16}
			/>
		</Toggle.Root>
	);
}
