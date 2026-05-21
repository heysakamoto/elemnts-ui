import { Avatar, Badge } from "@moto-ui/react";

export function Content() {
	return (
		<Badge size="md">
			<Avatar>
				<Avatar.Image src="https://images.pexels.com/photos/4611686/pexels-photo-4611686.jpeg?w=160&h=160" />
				<Avatar.Fallback fontSize="14">Nu</Avatar.Fallback>
			</Avatar>
			<Badge.Indicator>5</Badge.Indicator>
		</Badge>
	);
}
