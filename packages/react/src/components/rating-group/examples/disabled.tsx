import { Icon, RatingGroup } from "@moto-ui/react";

export default function Disabled() {
	return (
		<RatingGroup
			disabled
			count={5}
			defaultValue={3}
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
	);
}
