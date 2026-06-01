import { AspectRatio, Image } from "@moto-ui/react";

export function Basic() {
	return (
		<AspectRatio
			aspectRatio="16/9"
			w="20rem"
			rounded="24"
		>
			<Image
				src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
				alt="Landscape photograph"
			/>
		</AspectRatio>
	);
}
