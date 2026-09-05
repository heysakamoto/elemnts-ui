import { Container, For, Icon, InputGroup } from "@elemnts-ui/react";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

export default function Sizes() {
	return (
		<Container maxW="24rem" spaceY="8">
			<For each={sizes}>
				{(size) => (
					<InputGroup size={size}>
						<InputGroup.Addon color="icon.secondary">
							<Icon width={16} height={16} icon="tabler:search" />
						</InputGroup.Addon>
						<InputGroup.Input px="8" fontSize="14" placeholder="Search..." />
					</InputGroup>
				)}
			</For>
		</Container>
	);
}
