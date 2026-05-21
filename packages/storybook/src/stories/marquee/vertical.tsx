import preview from "@.storybook/preview";
import { Icon, Marquee, Surface } from "@moto-ui/react";

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
	title: "Vertical",
	component: Marquee,
});

export const Vertical = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `side` prop with `top` or `bottom` values to make the marquee scroll vertically.",
			},
		},
	},
	render: (args) => (
		<Marquee
			{...args}
			side="bottom"
			h="20rem"
		>
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
	),
});
