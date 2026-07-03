import { Icon, RatingGroup } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Half Rating",
	component: RatingGroup,
});

export const HalfRating = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the allowHalf prop to allow users to select half-star ratings.",
			},
		},
	},
	render: (args) => (
		<RatingGroup
			{...args}
			allowHalf
			defaultValue={2.5}
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
