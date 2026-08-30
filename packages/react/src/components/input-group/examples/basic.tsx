import { Container, Icon, InputGroup } from "@moto-ui/react";

export default function Basic() {
	return (
		<Container maxW="24rem">
			<InputGroup>
				<InputGroup.Addon color="icon.secondary">
					<Icon
						icon="tabler:search"
						width={16}
						height={16}
					/>
				</InputGroup.Addon>
				<InputGroup.Input
					px="8"
					fontSize="14"
					placeholder="Search..."
				/>
				<InputGroup.Addon color="icon.secondary">
					<Icon
						icon="tabler:command"
						width={16}
						height={16}
					/>
				</InputGroup.Addon>
			</InputGroup>
		</Container>
	);
}
