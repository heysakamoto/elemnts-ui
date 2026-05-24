import preview from "@.storybook/preview";
import { Container, Icon, Marquee, Surface } from "@moto-ui/react";

const reviews = [
	{
		id: "1",
		title: "Absolutely Stellar Experience",
		description:
			"This product exceeded all my expectations. The quality is top-notch and the performance is unmatched.",
		rating: 4,
		username: "john_doe",
	},
	{
		id: "2",
		title: "Great Value for Money",
		description:
			"I was skeptical at first, but after using it for a few weeks, I'm thoroughly impressed. Highly recommend!",
		rating: 4,
		username: "sarah_m",
	},
	{
		id: "3",
		title: "Solid Product Overall",
		description:
			"Does exactly what it promises. Setup was straightforward and the results have been consistently good.",
		rating: 5,
		username: "techguru42",
	},
	{
		id: "4",
		title: "Very Satisfied Customer",
		description:
			"The attention to detail is remarkable. I've tried many alternatives but this one stands out from the rest.",
		rating: 4,
		username: "emily_r",
	},
	{
		id: "5",
		title: "Impressive Performance",
		description:
			"Fast, reliable, and intuitive. It has made a noticeable difference in my day-to-day workflow.",
		rating: 5,
		username: "marcus_w",
	},
];

const meta = preview.meta({
	title: "Basic",
	component: Marquee,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use Marquee to continuously scroll a sequence of logos, images, or short text snippets when space is limited. It’s well-suited for brand walls, partner showcases, and news tickers, but should not be used for critical reading content.",
			},
		},
	},
	render: (args) => (
		<Container maxW="24rem">
			<Marquee {...args}>
				<Marquee.Viewport>
					<Marquee.Content py="4">
						{reviews.map((review) => {
							return (
								<Marquee.Item key={review.id}>
									<Surface
										delta={1}
										w="18rem"
										rounded="24"
									>
										<Surface.Header
											pt="12"
											px="16"
											direction="row"
											justify="space-between"
										>
											<Surface.Addon direction="row">
												{Array.from({ length: review.rating }).map((_, idx) => (
													<Icon
														width={14}
														height={14}
														key={idx.toString()}
														color="warning.primary"
														icon="tabler:star-filled"
													/>
												))}
											</Surface.Addon>
											<Surface.Description fontSize="13">
												{review.username}
											</Surface.Description>
										</Surface.Header>
										<Surface.Content
											py="12"
											px="16"
										>
											<Surface.Title fontSize="14">
												{review.title}
											</Surface.Title>
											<Surface.Description mt="6">
												{review.description}
											</Surface.Description>
										</Surface.Content>
									</Surface>
								</Marquee.Item>
							);
						})}
					</Marquee.Content>
				</Marquee.Viewport>
			</Marquee>
		</Container>
	),
});
