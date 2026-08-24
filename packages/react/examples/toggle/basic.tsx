import { Icon, Item, Toggle } from "@moto-ui/react";

export default function Basic() {
	return (
		<Toggle aria-label="Toggle italic">
			<Toggle.Context>
				{(ctx) => {
					return (
						<Item
							iconOnly
							selected={ctx.pressed}
						>
							<Icon
								icon="tabler:italic"
								width={16}
								height={16}
							/>
						</Item>
					);
				}}
			</Toggle.Context>
		</Toggle>
	);
}
