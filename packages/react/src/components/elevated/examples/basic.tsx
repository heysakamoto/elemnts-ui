import { Container, Elevated, For } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Container spaceY="10" maxW="24rem">
			<For each={[1, 2, 3]}>
				{(delta) => (
					<Elevated
						py="8"
						px="16"
						rounded="8"
						delta={delta}
						key={String(delta)}
					>
						Level {delta}
					</Elevated>
				)}
			</For>
		</Container>
	);
}
