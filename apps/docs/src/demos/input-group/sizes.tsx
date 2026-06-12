import { Container, Icon, InputGroup } from "@moto-ui/react";

export function Sizes() {
	return (
		<Container maxW="16rem">
			<InputGroup
				size="lg"
				rounded="24"
			>
				<InputGroup.Addon
					pl="8"
					color="icon.secondary"
				>
					<Icon
						width={16}
						height={16}
						icon="tabler:search"
					/>
				</InputGroup.Addon>
				<InputGroup.Input
					px="8"
					fontSize="14"
					placeholder="Search..."
				/>
			</InputGroup>
		</Container>
	);
}
