import { Avatar } from "@moto-ui/react";

export function Shapes() {
	return (
		<Avatar rounded="24">
			<Avatar.Image
				src="https://images.pexels.com/photos/12698114/pexels-photo-12698114.jpeg?w=200&h=200"
				alt=""
			/>
			<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
		</Avatar>
	);
}
