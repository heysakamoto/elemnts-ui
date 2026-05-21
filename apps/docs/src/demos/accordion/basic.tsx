import { Accordion, Container, Icon, Stack } from "@moto-ui/react";

const items = [
	{
		id: "1",
		title: "What is your return policy?",
		content:
			"You can return items within 30 days of delivery in their original condition for a full refund. Start a return from your order history or contact support for assistance.",
	},
	{
		id: "2",
		title: "Do you ship internationally?",
		content:
			"Yes, we ship to over 50 countries. Shipping fees and delivery times vary by destination and are calculated at checkout.",
	},
	{
		id: "3",
		title: "How can I track my order?",
		content:
			"Once your order ships, you’ll receive an email with a tracking link. You can also track it from your account’s Orders page.",
	},
	{
		id: "4",
		title: "What payment methods are accepted?",
		content:
			"We accept major credit/debit cards, PayPal, and Apple Pay. For large orders, bank transfer is available upon request.",
	},
	{
		id: "5",
		title: "How do I contact support?",
		content:
			"Reach us via live chat, email at support@example.com, or phone at (555) 123-4567 from 9am–6pm PT, Monday–Friday.",
	},
];

export function Basic() {
	return (
		<Container maxW="20rem">
			<Accordion>
				{items.map((item) => {
					return (
						<Accordion.Item
							key={item.id}
							value={item.id}
						>
							<Accordion.ItemTrigger>
								{item.title}
								<Accordion.ItemIndicator>
									<Icon
										icon="tabler:chevron-down"
										width={16}
										height={16}
									/>
								</Accordion.ItemIndicator>
							</Accordion.ItemTrigger>
							<Accordion.ItemContent>
								<Stack
									direction="column"
									p="12"
									pt="4"
								>
									{item.content}
								</Stack>
							</Accordion.ItemContent>
						</Accordion.Item>
					);
				})}
			</Accordion>
		</Container>
	);
}
