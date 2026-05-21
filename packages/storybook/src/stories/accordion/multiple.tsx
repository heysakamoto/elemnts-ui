import preview from "@.storybook/preview";
import { Accordion, Container, Icon, Stack, Text } from "@moto-ui/react";

const items = [
	{
		id: "1",
		title: "Getting started",
		content:
			"Install the component and import it into your project. The accordion supports both single and multiple expand modes.",
	},
	{
		id: "2",
		title: "Styling",
		content:
			"The component integrates with the shape system for pill or rounded border-radius variants. All animations use spring physics.",
	},
	{
		id: "3",
		title: "Accessibility",
		content:
			"Built on Ark UI Accordion with WAI-ARIA attributes, keyboard navigation, and focus management.",
	},
];

const meta = preview.meta({
	title: "Multiple",
	component: Accordion,
});

export const Multiple = meta.story({
	args: {
		multiple: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Set the `multiple` prop to allow more than one item to be expanded at the same time.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<Accordion {...args}>
				{items.map((item, idx) => {
					const isLastItem = idx === items.length - 1;
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
	),
});
