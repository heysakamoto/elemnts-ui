import { Container, Elevated, For } from "@moto-ui/react";

export default function Levels() {
	return (
		<Container
			maxW="20rem"
			spaceY="12"
		>
			<For each={[0, 1, 2, 3, 4, 5, 6, 7]}>
				{(delta) => (
					<Elevated
						py="10"
						px="16"
						rounded="10"
						delta={delta}
						direction="column"
						key={delta.toString()}
					>
						Level {delta + 1}
					</Elevated>
				)}
			</For>
		</Container>
	);
}
