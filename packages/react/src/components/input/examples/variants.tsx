import { Container, For, Input } from "@moto-ui/react";

export default function Variants() {
	return (
		<Container
			maxW="20rem"
			spaceY="12"
		>
			<For each={["primary", "secondary", "tertiary"]}>
				{(variant) => (
					<Input
						variant={variant}
						placeholder="Enter your address"
					/>
				)}
			</For>
		</Container>
	);
}
