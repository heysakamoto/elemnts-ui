import {
	Button,
	Carousel,
	Container,
	DecorativeBox,
	Icon,
} from "@moto-ui/react";

import preview from "@.storybook/preview";

const items = Array.from({ length: 5 });

const meta = preview.meta({
	title: "Basic",
	component: Carousel,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use Carousel to cycle through a set of slides. Place your slides inside `Carousel.ItemGroup` as individual `Carousel.Item` elements, then optionally add `Carousel.Control` to render built-in navigation and status UI.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<Carousel
				{...args}
				slideCount={items.length}
			>
				<Carousel.ItemGroup>
					{items.map((_, index) => (
						<Carousel.Item
							key={index.toString()}
							index={index}
						>
							<DecorativeBox
								rounded="24"
								h="16rem"
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
							rounded="full"
							colorPalette="neutral"
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
	),
});
