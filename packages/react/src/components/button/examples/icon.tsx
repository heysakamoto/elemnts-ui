import { Button, Icon as Svg } from "@moto-ui/react";

export default function Icon() {
	return (
		<Button>
			<Svg
				icon="tabler:mail"
				ml="-2"
				width={16}
				height={16}
			/>
			Send an email
		</Button>
	);
}
