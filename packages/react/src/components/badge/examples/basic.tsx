import { Avatar, Badge } from "@moto-ui/react";

export default function Basic() {
	return (
		<Badge size="xs">
			<Avatar>
				<Avatar.Image
					src="https://images.pexels.com/photos/4611686/pexels-photo-4611686.jpeg?w=160&h=160"
					alt="nick orange"
				/>
				<Avatar.Fallback fontSize="14">No</Avatar.Fallback>
			</Avatar>
			<Badge.Indicator />
		</Badge>
	);
}
