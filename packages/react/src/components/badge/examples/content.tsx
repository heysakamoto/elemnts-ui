import { Avatar, Badge } from "@elemnts-ui/react";

export default function Content() {
	return (
		<Badge size="md">
			<Avatar>
				<Avatar.Image
					src="https://images.pexels.com/photos/4611686/pexels-photo-4611686.jpeg?w=160&h=160"
					alt="avatar-md"
				/>
				<Avatar.Fallback fontSize="14">Nu</Avatar.Fallback>
			</Avatar>
			<Badge.Indicator>5</Badge.Indicator>
		</Badge>
	);
}
