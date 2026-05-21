import { Icon, Item, Toggle } from "@moto-ui/react";

export function Indicator() {
	return (
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
	);
}
