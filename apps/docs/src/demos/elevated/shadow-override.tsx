import { Elevated, Text } from "@moto-ui/react";

export function ShadowOverride() {
	return (
		<Elevated
			p="12"
			delta={1}
			rounded="24"
			shadowLevel={4}
		>
			<Text
				fontSize="14"
				color="fg.tertiary"
			>
				Elevation Level 2 (Custom Shadow Level 4)
			</Text>
		</Elevated>
	);
}
