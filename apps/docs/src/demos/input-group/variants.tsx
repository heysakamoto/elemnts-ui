import { Container, Icon, InputGroup } from "@moto-ui/react";

export function Variants() {
	return (
		<Container maxW="16rem">
			<InputGroup
				variant="secondary"
				rounded="24"
			>
				<InputGroup.Addon
					pl="8"
					color="icon.secondary"
				>
					<Icon
						icon="tabler:book"
						width={16}
						height={16}
					/>
				</InputGroup.Addon>
				<InputGroup.Input
					placeholder="Search..."
					px="8"
					fontSize="14"
				/>
			</InputGroup>
		</Container>
	);
}
