import { Icon, RatingGroup } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Read Only",
	component: RatingGroup,
});

export const ReadOnly = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use the readOnly prop to make the rating group read-only.",
			},
		},
	},
	render: (args) => (
		<RatingGroup
			{...args}
			readOnly
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
