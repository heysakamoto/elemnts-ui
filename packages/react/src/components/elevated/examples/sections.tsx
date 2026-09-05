import { Elevated } from "@elemnts-ui/react";

export default function Sections() {
	return (
		<Elevated
			delta={0}
			p="16"
			w="full"
			h="360px"
			rounded="16"
			fontSize="13"
			direction="column"
			color="fg.tertiary"
		>
			Page
			<Elevated
				delta={1}
				mt="8"
				p="16"
				rounded="16"
				flex="1"
				direction="column"
			>
				Card/Surface/Overlay
				<Elevated
					mt="8"
					delta={4}
					p="16"
					rounded="16"
					flex="1"
					direction="column"
				>
					Inner Overlay
				</Elevated>
			</Elevated>
		</Elevated>
	);
}
