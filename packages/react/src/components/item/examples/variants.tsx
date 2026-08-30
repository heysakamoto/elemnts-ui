import { Container, For, Item } from "@moto-ui/react";

const variants = ["primary", "secondary", "tertiary"] as const;

export default function Variants() {
	return (
		<Container
			maxW="20rem"
			spaceY="8"
		>
			<For each={variants}>
				{(variant) => (
					<Item
						selected
						key={variant}
						variant={variant}
						textTransform="capitalize"
					>
						{variant}
					</Item>
				)}
			</For>
		</Container>
	);
}
