import {
	Button,
	Carousel,
	Container,
	DecorativeBox,
	Icon,
} from "@moto-ui/react";

const items = Array.from({ length: 5 });

export default function Autoplay() {
	return (
		<Container maxW="20rem">
			<Carousel
				slideCount={items.length}
				autoplay
			>
				<Carousel.ItemGroup>
					{items.map((_, index) => (
						<Carousel.Item
							key={index.toString()}
							index={index}
						>
							<DecorativeBox h="16rem" />
						</Carousel.Item>
					))}
				</Carousel.ItemGroup>
				<Carousel.Control>
					<Carousel.PrevTrigger asChild>
						<Button
							iconOnly
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
						{items.map((_, index) => (
							<Carousel.Indicator
								key={index.toString()}
								index={index}
							/>
						))}
					</Carousel.IndicatorGroup>
					<Carousel.NextTrigger asChild>
						<Button
							iconOnly
							variant="secondary"
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
