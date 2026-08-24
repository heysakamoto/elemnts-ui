import { Elevated, Text } from "@moto-ui/react";

export default function SurfacesBase() {
	return (
		<Elevated
			delta={0}
			p="16"
			w="full"
			h="360px"
			rounded="24"
			fontFamily="mono"
			fontSize="12"
		>
			<Text
				color="fg.tertiary"
				mb="12"
			>
				Page
			</Text>
			<Elevated
				delta={1}
				p="16"
				rounded="20"
				flex="1"
			>
				<Text
					color="fg.tertiary"
					mb="12"
				>
					Card/Surface/Overlay
				</Text>
				<Elevated
					delta={1}
					p="16"
					rounded="16"
					flex="1"
				>
					<Text
						color="fg.tertiary"
						mb="12"
					>
						Inner Overlay
					</Text>
				</Elevated>
			</Elevated>
		</Elevated>
	);
}
