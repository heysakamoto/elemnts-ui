import { Avatar, Badge } from "@elemnts-ui/react";

export default function WithBadge() {
	return (
		<Badge size="xs">
			<Avatar>
				<Avatar.Image src="https://images.pexels.com/photos/9775435/pexels-photo-9775435.jpeg?w=200&h=200" />
				<Avatar.Fallback>Fs</Avatar.Fallback>
			</Avatar>
			<Badge.Indicator />
		</Badge>
	);
}
