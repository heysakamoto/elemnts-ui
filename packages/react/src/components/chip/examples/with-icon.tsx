import { Chip, Icon } from "@moto-ui/react";

export default function WithIcon() {
	return (
		<Chip
			size="sm"
			colorPalette="success"
		>
			<Icon
				ml="-2"
				width={14}
				height={14}
				icon="tabler:check"
			/>
			Completed
		</Chip>
	);
}
