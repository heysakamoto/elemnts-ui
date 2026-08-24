import { Icon, Spinner } from "@moto-ui/react";

export default function CustomIcon() {
	return (
		<Spinner>
			<Icon
				icon="tabler:loader-2"
				width={16}
				height={16}
			/>
		</Spinner>
	);
}
