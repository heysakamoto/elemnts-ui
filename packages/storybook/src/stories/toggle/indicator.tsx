import { Icon, Item, Toggle } from "@moto-ui/react";
import meta from "./stories";

export const Indicator = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `Toggle.Indicator` component to render different content based on the toggle state. The `fallback` prop is rendered when the toggle is not pressed.",
			},
		},
	},
	render: () => (
		<Toggle.Root aria-label="Toggle mute">
			<Toggle.Context>
				{(ctx) => {
					return (
						<Item
							iconOnly
							selected={ctx.pressed}
						>
							<Toggle.Indicator
								fallback={
									<Icon
										icon="tabler:volume"
										width={16}
										height={16}
									/>
								}
							>
								<Icon
									icon="tabler:volume-off"
									width={16}
									height={16}
								/>
							</Toggle.Indicator>
						</Item>
					);
				}}
			</Toggle.Context>
		</Toggle.Root>
	),
});
