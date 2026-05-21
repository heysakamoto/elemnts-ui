import {
	Container,
	Elevated,
	Stack,
	Substrate,
	Text,
	useSubstrate,
} from "@moto-ui/react";

function SubstrateIndicator() {
	const level = useSubstrate();

	return (
		<Stack
			gap="1"
			direction="column"
		>
			<Text
				fontSize="14"
				fontWeight="semibold"
			>
				Substrate Level {level}
			</Text>
			<Text
				fontSize="14"
				color="fg.tertiary"
			>
				Background shifts to surface.{level}
			</Text>
		</Stack>
	);
}

export function Basic() {
	return (
		<Container maxW="20rem">
			<Substrate value={7}>
				<Elevated
					p="12"
					delta={0}
					rounded="24"
				>
					<SubstrateIndicator />
				</Elevated>
			</Substrate>
		</Container>
	);
}
