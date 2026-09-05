import { AspectRatio, Image } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<AspectRatio w="20rem" aspectRatio="16/9">
			<Image
				alt="Landscape photograph"
				src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
			/>
		</AspectRatio>
	);
}
