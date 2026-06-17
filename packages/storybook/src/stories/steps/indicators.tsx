import preview from "@.storybook/preview";
import { Button, Group, Item, Steps, Surface } from "@moto-ui/react";

const meta = preview.meta({
	title: "Indicators",
	component: Steps,
});

const items = [
	{ value: "first", title: "First", description: "Contact Info" },
	{ value: "second", title: "Second", description: "Date & Time" },
	{ value: "third", title: "Third", description: "Select Rooms" },
];

export const Indicators = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use `Steps.ItemContext` to visually communicate each step’s status and customize the indicators.",
			},
		},
	},
	render: (args) => (
		<Steps
			{...args}
			count={items.length}
		>
			<Steps.List
				gap="8"
				justify="center"
			>
				{items.map((_, index) => {
					return (
						<Steps.Item
							index={index}
							key={index.toString()}
						>
							<Steps.ItemContext>
								{(ctx) => {
									return (
										<Item
											w="64"
											h="4"
											rounded="full"
											surface="secondary"
											selected={ctx.current}
										/>
									);
								}}
							</Steps.ItemContext>
						</Steps.Item>
					);
				})}
			</Steps.List>
			{items.map((item, index) => (
				<Steps.Content
					mt="12"
					key={index.toString()}
					index={index}
				>
					<Surface
						delta={1}
						h="16rem"
						w="20rem"
						align="center"
						justify="center"
					>
						{item.title} - {item.description}
					</Surface>
				</Steps.Content>
			))}
			<Steps.CompletedContent mt="12">
				<Surface
					delta={1}
					h="16rem"
					w="20rem"
					align="center"
					justify="center"
				>
					Done
				</Surface>
			</Steps.CompletedContent>
			<Group
				mt="20"
				justify="space-between"
			>
				<Steps.PrevTrigger asChild>
					<Button
						rounded="full"
						colorPalette="neutral"
						variant="secondary"
					>
						Previous
					</Button>
				</Steps.PrevTrigger>
				<Steps.NextTrigger asChild>
					<Button
						rounded="full"
						colorPalette="neutral"
						variant="secondary"
					>
						Next
					</Button>
				</Steps.NextTrigger>
			</Group>
		</Steps>
	),
});
