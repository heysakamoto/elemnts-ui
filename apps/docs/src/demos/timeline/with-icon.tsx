import {
	Chip,
	Container,
	Icon,
	Separator,
	Surface,
	Timeline,
} from "@moto-ui/react";

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
								<Timeline.Separator asChild>
									<Separator orientation="vertical" />
								</Timeline.Separator>
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
		icon: "tabler:shopping-cart",
		description: "Your order has been confirmed and is being processed.",
	},
	{
		title: "Payment Confirmed",
		icon: "tabler:credit-card",
		description: "Payment was successfully processed.",
	},
	{
		title: "Shipped",
		icon: "tabler:truck-delivery",
		description: "Your package has been dispatched from our warehouse.",
	},
	{
		title: "Out for Delivery",
		icon: "tabler:package",
		description: "Your package is with the courier and on its way.",
	},
	{
		title: "Delivered",
		icon: "tabler:circle-check",
		description: "Package delivered successfully. Enjoy!",
	},
];
