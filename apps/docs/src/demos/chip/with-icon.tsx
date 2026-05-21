import { Chip, Icon } from "@moto-ui/react";

export function WithIcon() {
	return (
		<Chip
			colorPalette="success"
			rounded="24"
		>
			<Icon
				ml="-2"
				icon="tabler:check"
				width={18}
				height={18}
			/>
			Completed
		</Chip>
	);
}
