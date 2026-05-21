import preview from "@.storybook/preview";
import { Icon, RatingGroup } from "@moto-ui/react";

const meta = preview.meta({
	title: "Palette",
	component: RatingGroup,
});

export const Palette = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the colorPalette prop to change the color of the rating group.",
			},
		},
	},
	render: (args) => (
		<RatingGroup
			{...args}
			colorPalette="warning"
		>
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
