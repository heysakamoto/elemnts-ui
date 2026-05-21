import { AspectRatio } from "@moto-ui/react";

export function Basic() {
	return (
		<AspectRatio ratio="16/9">
			<img
				src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
				alt="Landscape photograph"
			/>
		</AspectRatio>
	);
}
