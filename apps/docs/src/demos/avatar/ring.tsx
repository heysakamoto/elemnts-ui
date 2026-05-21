import { Avatar } from "@moto-ui/react";

export function Ring() {
	return (
		<Avatar
			outline="2px solid {colors.colorPalette.primary}"
			outlineOffset="1"
		>
			<Avatar.Image src="https://images.pexels.com/photos/9775435/pexels-photo-9775435.jpeg?w=200&h=200" />
			<Avatar.Fallback>Fs</Avatar.Fallback>
		</Avatar>
	);
}
