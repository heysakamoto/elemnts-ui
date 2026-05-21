import { Elevated, Text } from "@moto-ui/react";

export function Basic() {
	return (
		<Elevated
			p="12"
			delta={1}
			width="full"
			rounded="24"
		>
			<Text
				mb="8"
				fontSize="14"
				color="fg.tertiary"
			>
				Elevation Level 2 (Delta +1)
			</Text>
			<Elevated
				p="12"
				delta={1}
				rounded="16"
			>
				<Text
					mb="8"
					fontSize="14"
					color="fg.tertiary"
				>
					Elevation Level 3 (Delta +1)
				</Text>
				<Elevated
					p="12"
					delta={1}
					rounded="12"
				>
					<Text
						mb="8"
						fontSize="14"
						color="fg.tertiary"
					>
						Elevation Level 4 (Delta +1)
					</Text>
				</Elevated>
			</Elevated>
		</Elevated>
	);
}
