import { Avatar } from "@moto-ui/react";

export default function Shapes() {
	return (
		<Avatar>
			<Avatar.Image
				alt="user-profile-photo"
				src="https://images.pexels.com/photos/12698114/pexels-photo-12698114.jpeg?w=200&h=200"
			/>
			<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
		</Avatar>
	);
}
