import preview from "@.storybook/preview";
import { Icon, RatingGroup } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: RatingGroup,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The RatingGroup component allows users to provide a rating by selecting a number of icons, typically stars.",
			},
		},
	},
	render: (args) => (
		<RatingGroup {...args}>
			<RatingGroup.Control>
				<RatingGroup.Context>
					{({ items }) =>
						items.map((item) => (
							<RatingGroup.Item
								key={item}
								index={item}
							>
								<RatingGroup.Indicator boxSize="24">
									<Icon icon="tabler:star" />
									<Icon icon="tabler:star-filled" />
								</RatingGroup.Indicator>
							</RatingGroup.Item>
						))
					}
				</RatingGroup.Context>
			</RatingGroup.Control>
			<RatingGroup.HiddenInput />
		</RatingGroup>
	),
});
