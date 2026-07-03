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
	title: "Vertical",
	component: Carousel,
});

export const Vertical = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the `orientation` prop to `'vertical'` to render a vertical carousel.",
			},
		},
	},
	args: {
		h: "20rem",
		spacing: "12px",
		orientation: "vertical",
	},
	render: (args) => (
		<Container maxW="16rem">
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
								h="full"
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
								icon="tabler:arrow-up"
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
								icon="tabler:arrow-down"
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
