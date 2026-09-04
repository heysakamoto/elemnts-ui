import { Button, Carousel, Container, Icon, Image } from "@moto-ui/react";

import { css } from "../../styled-system/css";

const images = [
	{ src: "https://picsum.photos/seed/6/500/300", alt: "Nature landscape" },
	{ src: "https://picsum.photos/seed/7/500/300", alt: "City skyline" },
	{ src: "https://picsum.photos/seed/8/500/300", alt: "Mountain view" },
	{ src: "https://picsum.photos/seed/9/500/300", alt: "Ocean sunset" },
	{ src: "https://picsum.photos/seed/10/500/300", alt: "Forest path" },
];

export default function Thumbnail() {
	return (
		<Container maxW="24rem">
			<Carousel slideCount={images.length}>
				<Carousel.ItemGroup>
					{images.map((image, index) => (
						<Carousel.Item
							key={index.toString()}
							index={index}
						>
							<Image
								rounded="16"
								boxSize="full"
								src={image.src}
								alt={image.alt}
							/>
						</Carousel.Item>
					))}
				</Carousel.ItemGroup>
				<Carousel.Control>
					<Carousel.PrevTrigger asChild>
						<Button
							iconOnly
							rounded="full"
							colorPalette="neutral"
							variant="secondary"
						>
							<Icon
								icon="tabler:arrow-left"
								width={18}
								height={18}
							/>
						</Button>
					</Carousel.PrevTrigger>
					<Carousel.IndicatorGroup>
						{images.map((image, index) => (
							<Carousel.Indicator
								index={index}
								key={index.toString()}
								className={thumbnailStyle}
							>
								<Image
									src={image.src}
									alt={image.alt}
								/>
							</Carousel.Indicator>
						))}
					</Carousel.IndicatorGroup>
					<Carousel.NextTrigger asChild>
						<Button
							iconOnly
							rounded="full"
							variant="secondary"
							colorPalette="neutral"
						>
							<Icon
								icon="tabler:arrow-right"
								width={18}
								height={18}
							/>
						</Button>
					</Carousel.NextTrigger>
				</Carousel.Control>
			</Carousel>
		</Container>
	);
}

const thumbnailStyle = css({
	padding: 0,
	h: "2rem",
	w: "3.25rem",
	opacity: 0.6,
	cursor: "pointer",
	overflow: "hidden",
	borderRadius: "0.25rem",
	border: "2px solid transparent",
	transition: "border-color 200ms, opacity 200ms",

	_focusVisible: {
		outlineOffset: 2,
		outline: "2px solid {colors.colorPalette.primary}",
	},

	"&[data-current], &:hover": {
		opacity: 1,
		borderColor: "{colors.colorPalette.primary}",
	},

	"& img": {
		objectFit: "cover",
		boxSize: "{sizes.full}",
	},
});
