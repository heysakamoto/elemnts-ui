import { Icon, Tag } from "@moto-ui/react";

export function WithIcon() {
	return (
		<Tag>
			<Icon
				ml="-2"
				icon="tabler:tag"
				width={16}
				height={16}
			/>
			With Icon
		</Tag>
	);
}
