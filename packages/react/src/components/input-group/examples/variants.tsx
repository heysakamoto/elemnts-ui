import { Container, For, Icon, InputGroup } from "@elemnts-ui/react";

const variants = ["primary", "secondary", "tertiary"] as const;

export default function Variants() {
	return (
		<Container maxW="24rem" spaceY="12">
			<For each={variants}>
				{(variant) => (
					<InputGroup variant={variant}>
						<InputGroup.Addon color="icon.secondary">
							<Icon width={16} height={16} icon="tabler:search" />
						</InputGroup.Addon>
						<InputGroup.Input placeholder="Search..." px="8" fontSize="14" />
					</InputGroup>
				)}
			</For>
		</Container>
	);
}
