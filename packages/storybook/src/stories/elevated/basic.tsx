import { Elevated, Text } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Elevated,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"When nesting `Elevated` components, each layer adds its `delta` to the inherited substrate value from the nearest provider (defaulting to `1` at the root). The computed substrate level determines the background color and shadow level.",
			},
		},
	},
	render: () => (
		<Elevated
			p="12"
			delta={1}
			width="full"
			rounded="24"
		>
			<Text
				mb="8"
				fontSize="14"
				color="fg.tertiary"
			>
				Elevation Level 2 (Delta +1)
			</Text>
			<Elevated
				p="12"
				delta={1}
				rounded="16"
			>
				<Text
					mb="8"
					fontSize="14"
					color="fg.tertiary"
				>
					Elevation Level 3 (Delta +1)
				</Text>
				<Elevated
					p="12"
					delta={1}
					rounded="12"
				>
					<Text
						mb="8"
						fontSize="14"
						color="fg.tertiary"
					>
						Elevation Level 4 (Delta +1)
					</Text>
				</Elevated>
			</Elevated>
		</Elevated>
	),
});
