import { Elevated, Text } from "@moto-ui/react";

export function NoBorder() {
	return (
		<Elevated
			p="12"
			delta={2}
			rounded="24"
			withBorder={false}
		>
			<Text
				fontSize="14"
				color="fg.tertiary"
			>
				Elevation Level 3 (Without Border)
			</Text>
		</Elevated>
	);
}
