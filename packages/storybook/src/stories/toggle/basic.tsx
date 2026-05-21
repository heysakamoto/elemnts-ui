import { Icon, Item, Toggle } from "@moto-ui/react";
import meta from "./stories";

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					'The `Toggle` component is a compound component that allows users to toggle between two states, such as "on" and "off".',
			},
		},
	},
	render: () => (
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
	),
});
