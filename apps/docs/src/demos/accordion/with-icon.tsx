import { Accordion, Chip, Container, Icon, Stack, Text } from "@moto-ui/react";

const items = [
	{
		id: "1",
		icon: "tabler:plus",
		title: "How do I create an account?",
		content:
			"Click Sign Up in the top-right corner and follow the prompts. Confirm your email to activate your account.",
	},
	{
		id: "2",
		icon: "tabler:gift-card",
		title: "Can I change my subscription plan?",
		content:
			"Yes. Go to Settings > Billing to upgrade, downgrade, or cancel at any time. Changes are prorated.",
	},
	{
		id: "3",
		icon: "tabler:invoice",
		title: "Where can I download invoices?",
		content:
			"Navigate to Settings > Billing > Invoices to view your history and download PDF receipts.",
	},
];

export function WithIcon() {
	return (
		<Container maxW="20rem">
			<Accordion>
				{items.map((item, idx) => {
					const isLastItem = idx === items.length - 1;
					return (
						<Accordion.Item
							key={item.id}
							value={item.id}
						>
							<Accordion.ItemTrigger gap="10">
								<Chip
									iconOnly
									size="sm"
									ml="-6"
									colorPalette="neutral"
									variant="secondary"
								>
									<Icon
										icon={item.icon}
										width={16}
										height={16}
									/>
								</Chip>
								<Text
									flexGrow={1}
									textAlign="left"
								>
									{item.title}
								</Text>
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
									<Text
										fontSize="14"
										color="fg.secondary"
									>
										{item.content}
									</Text>
								</Stack>
							</Accordion.ItemContent>
							{!isLastItem && <Accordion.Separator />}
						</Accordion.Item>
					);
				})}
			</Accordion>
		</Container>
	);
}
