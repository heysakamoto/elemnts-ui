import { Chip, Container, Icon, Surface, Timeline } from "@moto-ui/react";

export function WithIcon() {
	return (
		<Container maxW="24rem">
			<Timeline>
				{events.map((event, idx) => {
					const key = idx.toString();
					return (
						<Timeline.Item
							key={key}
							gap="24"
						>
							<Timeline.Connector>
								<Timeline.Indicator>
									<Chip
										size="sm"
										iconOnly
									>
										<Icon
											width={16}
											height={16}
											icon={event.icon}
										/>
									</Chip>
								</Timeline.Indicator>
							</Timeline.Connector>
							<Timeline.Content>
								<Surface
									p="0"
									delta={0}
									rounded="0"
									elevated={false}
								>
									<Surface.Content gap="4">
										<Surface.Title fontSize="14">{event.title}</Surface.Title>
										<Surface.Description>
											{event.description}
										</Surface.Description>
									</Surface.Content>
								</Surface>
							</Timeline.Content>
						</Timeline.Item>
					);
				})}
			</Timeline>
		</Container>
	);
}

const events = [
	{
		title: "Order Placed",
		description: "Your order has been confirmed and is being processed.",
		icon: "tabler:shopping-cart",
	},
	{
		title: "Payment Confirmed",
		description: "Payment was successfully processed.",
		icon: "tabler:credit-card",
	},
	{
		title: "Shipped",
		description: "Your package has been dispatched from our warehouse.",
		icon: "tabler:truck-delivery",
	},
	{
		title: "Out for Delivery",
		description: "Your package is with the courier and on its way.",
		icon: "tabler:package",
	},
	{
		title: "Delivered",
		description: "Package delivered successfully. Enjoy!",
		icon: "tabler:circle-check",
	},
];
