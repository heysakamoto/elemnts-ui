import { Icon, Item, Toggle } from "@moto-ui/react";

export default function Indicator() {
	return (
		<Toggle
			asChild
			aria-label="Toggle mute"
		>
			<Item
				w="fit"
				variant="secondary"
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
		</Toggle>
	);
}
