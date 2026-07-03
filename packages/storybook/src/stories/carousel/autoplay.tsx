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
	title: "Autoplay",
	component: Carousel,
});

export const Autoplay = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Enable automatic slide advancement by setting the `autoplay` prop on the `Carousel` component.",
			},
		},
	},
	args: {
		autoplay: true,
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
