import { Icon, Item, ToggleGroup } from "@moto-ui/react";
import meta from "./stories";

export const Attached = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `attached` prop to visually connect the toggle items together into a unified group.",
			},
		},
	},
	render: (args) => (
		<ToggleGroup
			{...args}
			attached
		>
			<ToggleGroup.Context>
				{(ctx) => {
					const isActive = (value: string) => ctx.value.includes(value);

					return (
						<>
							<Item
								asChild
								iconOnly
								tone="secondary"
								roundedStart="24"
								selected={isActive("bold")}
							>
								<ToggleGroup.Item
									value="bold"
									aria-label="bold"
								>
									<Icon icon="tabler:bold" />
								</ToggleGroup.Item>
							</Item>
							<Item
								asChild
								iconOnly
								tone="secondary"
								selected={isActive("italic")}
							>
								<ToggleGroup.Item
									value="italic"
									aria-label="Italic"
								>
									<Icon icon="tabler:italic" />
								</ToggleGroup.Item>
							</Item>
							<Item
								asChild
								iconOnly
								tone="secondary"
								roundedEnd="24"
								selected={isActive("underline")}
							>
								<ToggleGroup.Item
									value="underline"
									aria-label="Underline"
								>
									<Icon icon="tabler:underline" />
								</ToggleGroup.Item>
							</Item>
						</>
					);
				}}
			</ToggleGroup.Context>
		</ToggleGroup>
	),
});
