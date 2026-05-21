import {
	Container,
	DecorativeBox,
	ScrollShadow,
	Stack,
	Surface,
} from "@moto-ui/react";

export function WithSurface() {
	return (
		<Container maxW="20rem">
			<Surface
				p="16"
				delta={1}
				rounded="24"
			>
				<ScrollShadow>
					<Stack
						gap="8"
						w="max-content"
					>
						<DecorativeBox
							w="12rem"
							h="4rem"
						/>
						<DecorativeBox
							w="12rem"
							h="4rem"
						/>
						<DecorativeBox
							w="12rem"
							h="4rem"
						/>
						<DecorativeBox
							w="12rem"
							h="4rem"
						/>
					</Stack>
				</ScrollShadow>
			</Surface>
		</Container>
	);
}
