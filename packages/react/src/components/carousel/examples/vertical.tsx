import {
	Button,
	Carousel,
	Container,
	DecorativeBox,
	Icon,
} from "@elemnts-ui/react";

const items = Array.from({ length: 5 });

export default function Vertical() {
	return (
		<Container maxW="16rem">
			<Carousel
				h="20rem"
				spacing="12px"
				orientation="vertical"
				slideCount={items.length}
			>
				<Carousel.ItemGroup>
					{items.map((_, index) => (
						<Carousel.Item key={index.toString()} index={index}>
							<DecorativeBox h="full" />
						</Carousel.Item>
					))}
				</Carousel.ItemGroup>
				<Carousel.Control>
					<Carousel.PrevTrigger asChild>
						<Button iconOnly variant="secondary">
							<Icon icon="tabler:arrow-up" width={18} height={18} />
						</Button>
					</Carousel.PrevTrigger>
					<Carousel.IndicatorGroup>
						{items.map((_, index) => (
							<Carousel.Indicator key={index.toString()} index={index} />
						))}
					</Carousel.IndicatorGroup>
					<Carousel.NextTrigger asChild>
						<Button iconOnly variant="secondary">
							<Icon icon="tabler:arrow-down" width={18} height={18} />
						</Button>
					</Carousel.NextTrigger>
				</Carousel.Control>
			</Carousel>
		</Container>
	);
}
