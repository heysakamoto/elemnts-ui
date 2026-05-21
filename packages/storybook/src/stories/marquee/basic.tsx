import preview from "@.storybook/preview";
import { Container, Icon, Marquee, Surface } from "@moto-ui/react";

const items = [
	{
		id: "1",
		icon: "logos:sourcegraph",
		label: "sourcegraph",
	},
	{
		id: "2",
		icon: "logos:apiary",
		label: "apiary",
	},
	{
		id: "3",
		icon: "logos:dropbox",
		label: "dropbox",
	},
	{
		id: "4",
		icon: "logos:dockbit",
		label: "dockbit",
	},
	{
		id: "5",
		icon: "logos:hootsuite-icon",
		label: "hootsuite",
	},
	{
		id: "6",
		icon: "logos:vite-icon-dark",
		label: "vite",
	},
	{
		id: "7",
		icon: "logos:meta-icon",
		label: "meta",
	},
	{
		id: "8",
		icon: "logos:rolldown-icon-dark",
		label: "rolldown",
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
		<Container maxW="20rem">
			<Marquee {...args}>
				<Marquee.Viewport>
					<Marquee.Content p="4">
						{items.map((item) => (
							<Marquee.Item key={item.id}>
								<Surface
									delta={1}
									rounded="24"
									boxSize="48"
									align="center"
									justify="center"
								>
									<Icon
										icon={item.icon}
										width={32}
										height={32}
										filter="grayscale(1)"
									/>
								</Surface>
							</Marquee.Item>
						))}
					</Marquee.Content>
				</Marquee.Viewport>
			</Marquee>
		</Container>
	),
});
