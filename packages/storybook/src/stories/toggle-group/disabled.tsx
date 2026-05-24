import preview from "@.storybook/preview";
import { Icon, Item, ToggleGroup } from "@moto-ui/react";

const meta = preview.meta({
	title: "Disabled",
	component: ToggleGroup,
});

export const Disabled = meta.story({
	parameters: {
		docs: {
			description: {
				story: "The entire toggle group or individual items can be disabled.",
			},
		},
	},
	render: (args) => (
		<ToggleGroup
			{...args}
			disabled
		>
			<ToggleGroup.Context>
				{(ctx) => {
					const isActive = (value: string) => ctx.value.includes(value);

					return (
						<>
							<Item
								asChild
								iconOnly
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
