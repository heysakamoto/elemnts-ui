import { Avatar } from "@moto-ui/react";

export default function Ring() {
	return (
		<Avatar outline="2px solid {colors.colorPalette.primary}">
			<Avatar.Image src="https://images.pexels.com/photos/9775435/pexels-photo-9775435.jpeg?w=200&h=200" />
			<Avatar.Fallback>Fs</Avatar.Fallback>
		</Avatar>
	);
}
