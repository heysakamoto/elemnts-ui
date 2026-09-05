import { Avatar, Badge, Container, For, Stack } from "@elemnts-ui/react";

const variants = ["primary", "secondary"] as const;

export default function Variants() {
	return (
		<Container>
			<Stack gap="8" align="center" justify="center">
				<For each={variants}>
					{(variant) => (
						<Badge size="sm" key={variant} variant={variant}>
							<Avatar>
								<Avatar.Image
									src="https://images.pexels.com/photos/4611686/pexels-photo-4611686.jpeg?w=160&h=160"
									alt={`avatar-${variant}`}
								/>
								<Avatar.Fallback fontSize="14">E</Avatar.Fallback>
							</Avatar>
							<Badge.Indicator />
						</Badge>
					)}
				</For>
			</Stack>
		</Container>
	);
}
